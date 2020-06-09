/**
 * 什么是迭代器？
 *  迭代器是一个用于迭代的对象，带有特定的接口。它返回一个对象，对象具有next方法，next方法返回一个对象，对象有两个属性：value 和 done。
 *  其中value对应下一个值 done是一个布尔值，用于表示是否迭代结束。
 * 
 * 什么是生成器？
 *  生成器是一个返回迭代器的函数。生成器函数由放在 function 关键字之 后的一个星号( * )来表示，并能使用新的 yield 关键字。
 */

// let obj = {
//     items:[],
//     *[Symbol.iterator](){
//         for (const value of this.items) {
//             yield value
//         }
//     }
// }

// obj.items.push(1,2,3);

// for (const value of obj) {
//     console.log(value)
// }

let colors = ["red", "green", "blue"];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ES6");
data.set("format", "ebook");
// for (let entry of colors.entries()) {
//   console.log(entry);
// }
// for (let entry of tracking.entries()) {
//   console.log(entry);
// }
// for (let entry of data.entries()) {
//   console.log(entry);
// }

// for (let entry of colors.values()) {
//   console.log(entry);
// }
// for (let entry of tracking.values()) {
//   console.log(entry);
// }
// for (let entry of data.values()) {
//   console.log(entry);
// }

// for (let entry of colors.keys()) {
//   console.log(entry);
// }
// for (let entry of tracking.keys()) {
//   console.log(entry);
// }
// for (let entry of data.keys()) {
//   console.log(entry);
// }

// let arr = [1,2,3]
// for (const [key,value] of arr) {
//     console.log(key,value)
// }

function* generator(){
    // console.log(0)
    
    let value = yield 1;
    console.log(value);
    
    let value2 = yield value + 2;
    console.log(value2);
    
    let value3 = yield value2 + 3;
    console.log(value3)
}

function runTask(taskDef){
    let task = taskDef();
    let nextTask = task.next();

    function step(){
        if(!nextTask.done){
            nextTask = task.next(nextTask.value);
            // nextTask = task.next();
            step()
        }
    }
    step()
}

runTask(generator)
