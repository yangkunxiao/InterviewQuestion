/**
 * flat():拉平数组。默认拉平2层，可指定层数。
 * flatMap():遍历数组
 */
/* const arr = [1, 2, 3, [4, 5]];
const arr1 = [1, 2, 3, [4, 5, [6, 7]]];
//flat()
console.log(arr.flat());
console.log(arr1.flat(Infinity));
//使用flat()去除空项
const arr2 = [, 1, , , , , , 3];
console.log(arr2.flat()); */

//flatMap()
/* const arr = [1, 2, 3]
console.log(arr.map(x => [x * 2]));
console.log(arr.flatMap(x => [x * 2]));
console.log(arr.flatMap(x => [
    [x * 2]
])); */

//Object.fromEntries(); 返回对象自身可枚举的键值对
/* const map = new Map([
    ['name', 'kaka'],
    ['age', '24']
]);
const obj = Object.fromEntries(map);
console.log(obj);

//Object.entries(); 返回键值对组成的数组
const arr = Object.entries(obj);
console.log(arr); */

//String.prototype.matchAll
// const str = 'yideng xuetang xuetang';
// const reg = /xue*/g;
// while ((match = reg.exec(str)) !== null) {
//     console.log(match[0], reg.lastIndex);
// }
// const res = reg.exec(str);
// console.log(str.match(reg))
// if (res !== null) {
//     console.log(res[0], reg.lastIndex);
// }

// const res = str.matchAll(reg);
// for (let key of res) {
//     console.log(key)
// }

// const str = 'ydeng1yideng2';
// const reg = /y(i)(deng(\d?))/g;
// console.log(str.match(reg))
// console.log([...str.matchAll(reg)])

//trimStart() trimEnd()

//Symbol.prototype.description属性
// const sym = Symbol('描述');
// console.log(String(sym)); //Symbol(描述)
// console.log(sym.description); //描述


// const arr = [
//     { age: 1, name: 'kaka' },
//     { age: 2, name: 'tim' },
//     { age: 3, name: 'mot' },
//     { age: 3, name: 'carry' },

// ];
// arr.sort((a, b) => a.age - b.age)
// console.log(arr)

//bigInt
let num = BigInt(1);
let num1 = BigInt(10);
console.log(num - num1);
// console.log(num - 1); //报错 bigint只能和同类型的进行比较

//globalThis
console.log(globalThis);

function getGlobal() {
    if (typeof self != 'undefined') {
        return self;
    } else if (typeof window != 'undefined') {
        return window;
    } else if (typeof globalThis != 'undefined') {
        return globalThis
    }
    return new Error()
};
console.log(getGlobal())