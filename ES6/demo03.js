/**
 * etTimeout, promise.then, process.nextTick, setImmediate的
 */
// 题目一：
//预期结果：随机
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate')
// });


// 题目二：
//预期结果：nextTick  promise
const promise = Promise.resolve();
// promise.then(() => {
//     console.log('promise')
// });
// process.nextTick(() => {
//     console.log('nextTick')
// });


// 题目三：
//预期结果：2 3 5 4 1
// setTimeout(() => {
//     console.log(1)
// }, 0);
// new Promise((resolve, reject) => {
//     console.log(2)
//     for (let i = 0; i < 10000; i++) {
//         i === 9999 && resolve()
//     };
//     console.log(3);
// }).then(() => {
//     console.log(4);
// });
// console.log(5);


// 题目四  无限循环
setInterval(() => {
    console.log('setInterval');
}, 100);
process.nextTick(function tick() {
    process.nextTick(tick)
})