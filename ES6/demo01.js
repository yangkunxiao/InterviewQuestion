//proxy
// let obj = new Proxy({}, {
//     get: function(target, key, receiver) {
//         // console.log(target, key, receiver)
//         return Reflect.get(target, key, receiver)
//     },
//     set: function(target, key, value, receiver) {
//         // console.log(target, key, value, receiver)
//         return Reflect.set(target, key, value, receiver)
//     },
//     has: function(target, propKey) {
//         //拦截propKey in proxy的操作，返回一个布尔值。
//         if (propKey === 'c') { //隐藏属性
//             return false
//         }
//         return propKey in target
//     },
//     deleteProperty(target, propKey) {
//         //拦截delete proxy[propKey]的操作，返回一个布尔值。
//         return delete target[propKey]
//     },
//     ownKeys(target) {
//         //拦截Object.getOwnPropertyNames(proxy)、
//         //Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。
//         //该方法返回目标对象所有自身的属性的属性名， 
//     }
// });

// obj.a = 10;
// // console.log(obj.a);
// console.log('a' in obj)
// console.log('b' in obj)

//设置对象不可扩展

// let s = { a: 0 };
// Object.preventExtensions(s)

// let p = new Proxy(s, {
//     has: function(target, propKey) {
//         return false
//     },
// })

// 'a' in p// TypeError