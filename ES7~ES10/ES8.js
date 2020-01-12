/**
 * ES8 ES2017
 * async await
 * async 返回一个promise对象
 */

/* async function add(num) {
    return num + 1
};

add(2).then(res => {
    console.log(res); //3
}) */

// async function sleep(time) {
//     return 20
// };

// async function setSleep() {
//     let s = await sleep(5000);
//     console.log(s)
// }

// setSleep();

/* function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(100);
            reject('错误结果')
        }, time)
    })
};

async function setSleep() {
    try {
        let s = await sleep(2000);
        console.log('捕获错误信息、下面不会执行')
    } catch (error) {
        console.log(error)
    }
}
//或者 
// setSleep().catch(err => {
//     console.log(err)
// })

setSleep(); */

//多个await同时执行
/* function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, time)
    })
};

async function fn(params) {
    console.time('f1');
    // let s = await sleep(1000);
    // let s1 = await sleep(2000);
    let [res, res2] = await Promise.all([sleep(1000), sleep(2000)])
    console.timeEnd('f1'); //3s 2s
};

fn() */



/**
 * Object.values() 返回的是自身的值，不包括继承来的值
 * Object.entries() 返回对象的可遍历的键值对的数组
 */

/* let obj = {
    a: 10,
    b: 20
};

//获取对象属性值

//之前
console.log(Object.keys(obj).map(key => obj[key])); //[ 10, 20 ]
//ES8
console.log(Object.values(obj));

console.log(Object.entries(obj)) //[ [ 'a', 10 ], [ 'b', 20 ] ]

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value)
} */


/**
 * String:
 * string.padStart()
 * string.padEnd()
 */
// let str = 'hello';
// console.log(str.padStart(10, '0'));
// console.log(str.padEnd(10, '0'));

//Object.getOwnPropertyDescriptiors 获取对象属性描述符
/* let obj = {
    a: 10,
    get f() {
        return 's'
    }
};

console.log(Object.getOwnPropertyDescriptors(obj)) */