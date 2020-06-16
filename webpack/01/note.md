### webpack异步打包原理

> base: https://juejin.im/post/5d26e7d1518825290726f67a

1、打包之后main.js是一个自执行函数，将文件路径当作key，转换之后的index（入口文件）当作value传递给自执行函数的形参modules。
2、在主函数中，使用下面的程序加载入口函数、初始化入口模块
```javascript 
    return __webpack_require__(__webpack_require__.s = "./index.js");
```
\_\_webpack\_require\_\_的实现:

- 如果缓存中已经存在该模块（即已经加载过该模块），直接从缓存中取出该模块并返回该模块的exports

- 如果不存在，则新建一个对象模块，并放入缓存中，且执行模块，最后同样返回module.exports

- 综上，该函数的作用就是加载指定模块并执行该模块，且返回模块的module.exports。
```javascript
function __webpack_require__(moduleId) {
    // Check if module is in cache
	if(installedModules[moduleId]) {
		return installedModules[moduleId].exports;
	}
	// Create a new module (and put it into the cache)
	var module = installedModules[moduleId] = {
		i: moduleId,
		l: false,
		exports: {}
	};

	// Execute the module function
	modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
	module.l = true;

		// Return the exports of the module
	return module.exports;
}

```

我们可以看到，简化之后的代码：
```javascript
//index.js
import('./async').then(res => {
    console.log(res)
})

//main.js
__webpack_require__.e(/*! import() */ 0)
.then(__webpack_require__.bind(null, /*! ./async */"./async.js"))
.then(res => {
    console.log(res)
})

```

import被转换为\_\_webpack\_require\_\_.e

\_\_webpack_require\_\_.e的实现
```javascript
__webpack_require__.e = function requireEnsure(chunkId) {
		var promises = [];
		// JSONP chunk loading for javascript
		var installedChunkData = installedChunks[chunkId];
		if(installedChunkData !== 0) { // 0 means "already installed".

			// a Promise means "currently loading".
			if(installedChunkData) {
				promises.push(installedChunkData[2]);
			} else {
				// setup Promise in chunk cache
				var promise = new Promise(function(resolve, reject) {
                    //将chunk相关的请求回调存入到installedChunks中
					installedChunkData = installedChunks[chunkId] = [resolve, reject];
				});
				promises.push(installedChunkData[2] = promise);

				// start chunk loading
				var script = document.createElement('script');
				var onScriptComplete;

				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute("nonce", __webpack_require__.nc);
				}
				script.src = jsonpScriptSrc(chunkId);

				// create error before stack unwound to get useful stacktrace later
				var error = new Error();
				onScriptComplete = function (event) {
					// avoid mem leaks in IE.
					script.onerror = script.onload = null;
					clearTimeout(timeout);
					var chunk = installedChunks[chunkId];
					if(chunk !== 0) {
						if(chunk) {
							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
							var realSrc = event && event.target && event.target.src;
							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
							error.name = 'ChunkLoadError';
							error.type = errorType;
							error.request = realSrc;
							chunk[1](error);
						}
						installedChunks[chunkId] = undefined;
					}
				};
				var timeout = setTimeout(function(){
					onScriptComplete({ type: 'timeout', target: script });
				}, 120000);
				script.onerror = script.onload = onScriptComplete;
				document.head.appendChild(script);
			}
		}
		return Promise.all(promises);
	};
```

可以看出，该函数首先检查模块是否已被加载过，如果已经被加载过，则将其从缓存中取出放入promises数组中；否则，新建script标签，发起jsonp请求，重新加载该模块，并做一些错误处理。最后，返回promise。

这里就有两个问题？

\_\_webpack\_require\_\_ 是根据我们之前传入的 modules 来获取 module 的，但是，在 \_\_webpack\_require\_\_.e 中并没有看到有对 modules 执行操作的代码。那 modules 到底是什么时候被更新的呢？

promise 把 resolve 和 reject 全部存入了 installedChunks 中， 并没有在获取异步chunk成功的onload 回调中执行 resolve，那么，resolve 是什么时候被执行的呢

0.js : 异步chunk

```javascript
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

"./async.js":
 (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    const asyncText = 'async';
    /* harmony default export */ __webpack_exports__["default"] = (asyncText);
    //# sourceURL=webpack:///./async.js?");
})

}]);
```

```javascript
function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    // add "moreModules" to the modules object,
    // then flag all "chunkIds" as loaded and fire callback
    var moduleId, chunkId, i = 0, resolves = [];
    for(;i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
            resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
    }
    for(moduleId in moreModules) {
        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        //将chunk中的所有模块都注册到 modules 中
            modules[moduleId] = moreModules[moduleId];
        }
    }
    if(parentJsonpFunction) parentJsonpFunction(data);

    while(resolves.length) {
    //执行resolve
        resolves.shift()();
    }

};
```
可以看出，webpackJsonpCallback的作用是：
- 执行installedChunks中的resolve，让import()得以继续执行
- 将chunk注册到modules中。


综上：异步加载的流程
- 开始加载异步模块 --> \_\_webpack\_require\_\_ 加载并执行转换后的入口文件 --> \_\_webpack\_require\_\_.e
- 将与chunk相关的回调存入到installedChunks中 --> \_\_webpack\_require\_\_e 并发起jsonp请求，返回promise
- 执行chunk
- 执行installedChunks中每一个chunk的回调函数的resolve，让import()执行下去；将chunk中的模块注册到modules中 --> webpackJsonpCallback
- 加载module 执行对应代码的逻辑