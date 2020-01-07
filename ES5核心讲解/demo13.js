/**
 * async
 * babel编译后的async原理:generator + promise
 * */

// let a = 0;
// let yideng = async() => {
//     a = a + await 10;
//     console.log(a)
// }
// yideng();
// console.log(++a);
//预期结果：1，10

async function async1() {
    console.log(1)
    await async2();
    console.log(3)
}
async function async2() {
    console.log(2)
}
async1();
console.log(4);

//预期结果：1 2 4 3