//参数默认值
function test(first=10,second = 20) {
    console.log(first === arguments[0])//true
    console.log(second === arguments[1])//true

    first = 3;
    second = 4;

    console.log(first === arguments[0])//false
    console.log(second === arguments[1])//false
}

function test(...rest){
    console.log(rest[0] === arguments[0])//true

    rest[0] = 1

    console.log(rest[0] === arguments[0])//true

}

test(1,2)

/**
 * 在es5非严格模式下，这种模式arguments总是被更新以反应具名参数的变化
 * 所以当first second变化的时候 arguments也会作出响应的改变 所有均为true
 * 在es5严格模式下，取消了这种混乱的模式，它不在反应出这种变化
 *
 * 而在es6中默认就对应这es5的严格模式
 */

//a == 1 && a == 2 && a == 3
/* let a = {
     value:1,
     valueOf(){
         return a.value++
     },
     toString(){
         return a.value++
     }
 }
 console.log(a == 1)
 console.log(a == 2)
 console.log(a == 3) */

//obj.a == 1 && obj.a ==2 && obj.a == 3

//  let obj = {
//      value:1
//  }

//  Object.defineProperty(obj,'a',{
//      get(){
//         return this.value++
//      },
//      set(){

//      }
//  })

// obj = new Proxy(obj,{
//     get(target,key,receiver){
//         if(key == 'a'){
//             return target.value ++
//         }
//     }
// })
//  console.log(obj.a == 1)
//  console.log(obj.a == 2)
//  console.log(obj.a == 3)
//  console.log(obj.a == 4)

// function test(a,b){
//     console.log(test.length,arguments.length)
// }

// test(1,2,3,4)


//实现underscore的pick

// function pick(object) {
//     let result = Object.create(null)
// 	// 从第二个参数开始处理
// 	for (let i = 1, len = arguments.length; i < len; i++) {
//         console.log(arguments[i])
// 		result[arguments[i]] = object[arguments[i]]
// 	}
// 	return result
// }

//使用es6的剩余参数rest改造
/* function pick(object,...rest){
    let result = Object.create(null);
    for (let i = 0,len = rest.length; i < len; i++) {
        result[rest[i]] = object[rest[i]]
    }
    return result
}

let book = {
	title: 'Understanding ES6',
	author: 'Nicholas C. Zakas',
	year: 2015,
}
let bookData = pick(book,'title','author')
console.log(bookData) */
// console.log(bookData.author) // "Nicholas C. Zakas" 
// console.log(bookData.year); // 2015

