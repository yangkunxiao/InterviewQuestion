//Iterator遍历器
/**
 * 遍历器（Iterator
 * 它是一种接口，为各种不同的数据结构提供统一的访问机制。
 * 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 * 
 * Iterator 的作用有三个：
 * 一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费
 * 
 * Iterator 的遍历过程是这样的：
 * 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 * 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 * 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 * 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 * 
 * 指针对象的next方法，用来移动指针。
 * 开始时，指针指向数组的开始位置。
 * 然后，每次调用next方法，指s针就会指向数组的下一个成员
 */

function makeIterator(array) {
    let index = 0;
    return {
        next() {
            return {
                value: array[index++],
                done: index >= array.length
            }
        }
    }
};

let array = [1, 2, 3, 4, 5];

let s = makeIterator(array);

// console.log(s.next())
// console.log(s.next())
// console.log(s.next())
// console.log(s.next())
// console.log(s.next())

//for of
function* makeIteratorForObject(obj) {
    for (let key in obj) {
        yield [key, obj[key]]
    }
}

// let obj = {
//     a: 100,
//     [Symbol.iterator]() {
//         return this;
//     },
//     next() {
//         return {
//             value: this,
//             done: false
//         }
//     }
// }

let obj = makeIteratorForObject({ a: 10, b: 20, c: 30 })

for (const key of obj) {
    console.log(key)
}