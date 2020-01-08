//promise
/**
 * new Promise() 必须有一个回调，该回调是同步操作，回调函数有两个参数，用以支持promise的决议，resolve() 和 reject()
 * Promise.resolve() Promise.reject()
 * 每一个promise实例都有then() 和 catch()方法，这两个方法为promise注册完成和拒绝处理函数，且是异步调用
 */
var p = new Promise(function(resolve, reject) {
    console.log('start')
        // foo.bar(); // foo未定义，所以会出错! 
    resolve(42); // 永远不会到达这里 :(
});
p.then(
    function fulfilled(res) {
        // console.log(res, 'res')
        // 永远不会到达这里 :( 
    },
    function rejected(err) {
        console.log(err, 'err')
            // err将会是一个TypeError异常对象来自foo.bar()这一行
    }
).then(res => {
    console.log(res, 'res')
});

let p1 = new Promise((resolve, reject) => {
    resolve(20)
});

console.log(p1, 'p1')

function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time);
    });
}
delay(100) // 步骤1 
    .then(function STEP2() {
        console.log("step 2 (after 100ms)");
        return delay(200);
    })
    .then(function STEP3() {
        console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
        console.log("step 4 (next Job)");
        return delay(50);
    })
    .then(function STEP5() {
        console.log("step 5 (after another 50ms)");
    })

let p5 = Promise.resolve(2);

p5.then(null, reject => {
    console.log('3')
})

/**
 * 调用 Promise 的 then(..) 会自动创建一个新的 Promise 从调用返回。
 * 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的(可链接的)Promise 就相应地决议.
 * 如果完成或拒绝处理函数返回一个 Promise，它将会被展开，这样一来，
 * 不管它的决议值是什么，都会成为当前 then(..) 返回的链接 Promise 的决议值
 * Promise(..) 构造器的第一个参数回调会展开 thenable(和 Promise.resolve(..) 一样)或 真正的 Promise:
 */


/**
 * Promise.all
 * 传给 Promise.all([ .. ]) 的数组中的值可以是 Promise、 thenable，甚至是立即值。
 * 就本质而言，列表中的每个值都会通过 Promise. resolve(..) 过滤，
 * 以确保要等待的是一个真正的 Promise，所以立即值会 被规范化为为这个值构建的 Promise。
 * 如果数组是空的，主 Promise 就会立 即完成。
 * 
 */
let p6 = Promise.resolve(1);
let p7 = Promise.resolve(2);

Promise.all([p6, p7]).then(([res1, res2]) => {
    console.log(res1, res2, 'p')
})


/**
 * Promise.race 竞态
 * Promise.race([ .. ])也接受单个数组参数。这个数组由一个或多个Promise、thenable或 立即值组成。
 * 与Promise.all([ .. ])类似，一旦有任何一个Promise决议为完成，Promise.race([ .. ]) 就会完成;
 * 一旦有任何一个 Promise 决议为拒绝，它就会拒绝。
 * 
 * 若向Promise.all([ .. ])传入空数组，它会立即完成，但Promise. race([ .. ]) 会挂住，且永远不会决议。
 * 
 * 设置超时、超时竞赛
 */

/**
 * none:所有的Promise都要被 拒绝，即拒绝转化为完成值，反之亦然。
 * any:需要完成一个而不是全部
 * first:即只要第一个Promise完成，它就会忽略后续 的任何拒绝和完成。
 * last:只有最后一个完成胜出
 * */

//处理并发 所有的promise都要经过某个处理
if (!Promise.map) {
    Promise.map = (params, cb) => {
        return Promise.all(
            params.map(val => {
                return new Promise(resolve => {
                    cb(val, resolve)
                })
            })
        )
    }
}