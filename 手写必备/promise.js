function Promise(cb) {
	let self = this
	this.value = null
	this.status = 'PENDING'
	this.onResolvedCallback = []
	this.onRejectedCallback = []

    function resolve(value) {
        setTimeout(() => {
            if(self.status === 'PENDING'){
                self.value = value
                self.status = 'RESOLVED'
                self.onResolvedCallback.forEach(cb => {
                    cb(value)
                })
            }
        })
	}
	function reject(value) {
        setTimeout(() => {
            if(self.status === 'PENDING'){
                self.value = value
                self.status = 'REJECTED'
                self.onRejectedCallback.forEach(cb => {
                    new Promise().catch(value);
                    cb(value)
                })
            }
        })
	}
	try {
		cb(resolve, reject)
	} catch (error) {
		reject(error)
	}
}
/**
 * promise的then方法 返回一个promise对象 
 * 接受成功的回调、失败的回调两个参数 
 */
Promise.prototype.then = function(onResolved, onRejected) {
	onFulfilled =
		typeof onFulfilled === 'function' ? onFulfilled : value => value
	onRejected =
		typeof onRejected === 'function'
			? onRejected
			: error => {
					throw error
			  }
	//缓存this  在哪个promise中调用的then 就指向哪个
	let self = this
	return new Promise((resolve, reject) => {
		//将then的回调函数放入回调数组中
		// console.log(self,'self')
		if (self.status === 'RESOLVED') {
			self.onResolvedCallback.push(function() {
				// onResolved就对应then传入的函数
                let result = onResolved(self.value);
                console.log(result,'result')
				//如果函数返回值是一个新的promise对象 就继续调用promise的then方法
				if (result instanceof Promise) {
					result.then(resolve, reject)
				} else {
					//否则直接resolve
					resolve(result)
				}
			})
		} else if (self.status === 'REJECTED') {
			self.onRejectedCallback.push(function(){
			    // onResolved就对应then传入的函数
			    let result = onRejected(self.value);
			    //如果函数返回值是一个新的promise对象 就继续调用promise的then方法
			    if(result instanceof Promise){
			        result.then(resolve,reject)
			    }else {
			        //否则直接resolve
			        reject(result)
			    }
			})
		} else if (self.status === 'PENDING') {
			self.onResolvedCallback.push(function() {
				// onResolved就对应then传入的函数
				let result = onResolved(self.value)
				//如果函数返回值是一个新的promise对象 就继续调用promise的then方法
				if (result instanceof Promise) {
					result.then(resolve, reject)
				} else {
					//否则直接resolve
					resolve(result)
				}
            })
            self.onRejectedCallback.push(function(){
			    // onResolved就对应then传入的函数
			    let result = onRejected(self.value);
			    //如果函数返回值是一个新的promise对象 就继续调用promise的then方法
			    if(result instanceof Promise){
			        result.then(resolve,reject)
			    }else {
			        //否则直接resolve
			        reject(result)
			    }
			})
		}
	})
}
/**
 * promise 数组中所有的 promise 实例都变为resolve 的时候，该方法才会返回，并将所有结果传递 results 数组中。
 * promise 数组中任何一个 promise 为 reject 的话，则整个 Promise.all 调用会立即终止，并返回一个 reject 的新的 promise 对象。
 * 
 * 1、接收一个 Promise 实例的数组或具有 Iterator 接口的对象，
 * 2、如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
 * 3、如果全部成功，状态变为 resolved，返回值将组成一个数组传给回调
 * 4、只要有一个失败，状态就变为 rejected，返回值将直接传递给回调all() 的返回值也是新的 Promise 对象

 */
Promise.prototype.all = function(promises){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)){
            return reject(new TypeError('arguments must be an array'));
        }
        let count = 0,
            len=  promises.length,
            resolveValues = new Array(len);
        for (let i = 0; i < len; i++) {
            promises[i].then((value) => {
                count++;
                resolveValues[i] = value;
                if(count === len){
                    return resolve(resolveValues)
                }
            },(value) => {
                return reject(value)
            })
        }
    })
}

Promise.prototype.catch = function(onRejected){
    return this.then(null,onRejected) 
}

/**
 * 实现一个Promise.resolve()方法，要注意以下几点：
• 参数为Promise实例，直接返回该实例
• 参数为一个thenable对象，Promise.resolve()方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
• 参数不是具有then方法的对象，或根本就不是对象，则返回一个新的Promise对象，状态为resolve
• 不带有任何参数，直接返回一个新的promise对象，状态为resolved。
 */
Promise.prototype.resolve = function(params){
	if(params instanceof Promise){
  	return params
  }
  return new Promise((resolve,reject) => {
  	if(params && prams.then && typeof params.then === 'fuunction'){
      	params.then(resolve,reject)
    }else {
    	resolve(params)
    }
  })
}

//Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
Promise.prototype.reject = function(reason){
	return new Promise((resolve,reject) => {
  	reject(reason)
  })
}




let fn = (resolve,reject) => {
    resolve(0)
	// setTimeout(() => {
    //     // resolve(1)
    //     reject(0)
	// }, 2000)
}

// let p1 = new Promise(fn)
// p1.then(res => {
// 	console.log(res)
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(2)
// 		})
// 	})
// },err => {
//     console.log(err,'err');
//     return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(3)
// 		})
// 	})
// }).then(res => {
// 	console.log(res)
// })


let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(0)
    },1000)
});
let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(3)
    },1500)
});

let p4 = new Promise((resolve,reject) => {
    resolve(1)
});

// let p4 = new Promise((resolve,reject) => {
//     reject(2)
// });

let res = new Promise().all([p2,p3,p4]);
// console.log(res)

res.then(result => {
    console.log(result)
})