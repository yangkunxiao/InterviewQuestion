// function parsePath(path){
//     const segments = path.split('.')
//     // return function (obj) {
//     //   for (let i = 0; i < segments.length; i++) {
//     //     if (!obj) return
//     //     obj = obj[segments[i]]
//     //   }
//     //   return obj
//     // }
//     return segments
// }

// function setter(target,key,value){
//     let keys = parsePath(key);
//     let obj = {};
//     while(keys.length > 0){
//         let key = keys.shift();
//         obj[key] = target[key]
//     }
//     console.log(obj)
//     // for (const i of keys) {
//     //     console.log(target[i]);
//         // console.log(i);
//         // for (const j in target) {
//         //     if (target.hasOwnProperty(j)) {
//         //         if(i == j){
//         //             console.log(i,j)
//         //         }else {
//         //             continue
//         //         }
//         //     }
//         // }
//     // }
//     // for (const key in target) {
//     //     if (target.hasOwnProperty(key)) {
//     //         const element = target[key];
//     //         console.log(key)
//     //     }
//     // }
// }


// let obj = {
//     a:10,
//     b:20,
//     c:{
//         d:100,
//         e:{
//             f:1
//         }
//     }
// }
// setter(obj,'c.e.f',1000)


// setTimeout(( ) => {
//     console.log(0)
// },0)

// new Promise(res => {
//     setTimeout(() => {
//         res()
//     },0)
// }).then(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//     })
//     new Promise(r => r()).then(() => {
//         console.log(3)
//     })
// })

// setTimeout(() => {
//     console.log(4)
// })

// new Promise(r => r()).then(() => {
//     console.log(5)
// })

// //5 0 1 3 4 2 


// function Foo(){
//     getName = function(){
//         console.log(1);
//         return this;
//     }
// }

// // getName();//getName is not a function

// Foo.getName = function(){
//     console.log(2)
// }

// Foo.prototype.getName = function(){
//     console.log(3)
// }

// getName = function(){
//     console.log(4)
// }
// //---------------------------------

// Foo.getName();//2

// getName();//4

// Foo().getName();//error

// getName();//1

// Foo.getName();//2

// new Foo().getName()//3


// Function.prototype.bind = function(ctx,...rest){
//     let constructor = this;
//     return function(){
//         let args = Array.from(arguments);
//         constructor.apply(ctx,[...rest,...args])
//     }
// }

// let n = function(a,b,c,d){
//     console.log(this.x,a,b,c,d)
// }

// let m = {
//     x:3
// }

// let fn = n.bind(m,1,2);
// fn(3,4)