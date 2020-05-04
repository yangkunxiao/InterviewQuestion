//Generator
// function* func (){
//     yield 10;
//     yield 20;
//     yield 30;
//     return 'kaka'
// }

// let s = func();
// console.log(s.next())
// console.log(s.next())
// console.log(s.next())
// console.log(s.next())

//斐波那契数列
// function fbnqArray(num){
//     let result = [1];
//     function generatorArray(pre = 0,cur = 1){
//         let curClone = cur;
//         cur = cur + pre;
//         // console.log(curClone,cur)
//         if(result.length <= num){
//             result.push(cur);
//             generatorArray(curClone,cur)
//         }
//     }
//     generatorArray();
//     return result
// }

// let arr = fbnqArray(7);
// console.log(arr)

//使用generator使得对象可以使用for of
// function* generatorObject(obj){
//     let keys = Reflect.ownKeys(obj);
//     for (let i = 0,len = keys.length; i < len; i++) {
//         const key = keys[i];
//         yield [key,obj[key]]
//     }
// }
// for (const [key,value] of generatorObject({a:10,b:20})) {
//     console.log(key,value)
// }

// 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。
// console.log([...generatorObject({a:10,b:20})])

function* foo() {
	yield 'a'
	yield 'b'
}

function* bar() {
	yield 'x'
	// 手动遍历 foo()
	yield* foo()
	// for (let i of foo()) {
	// 	console.log(i)
	// }
	yield 'y'
}

for (let v of bar()) {
	console.log(v)
}

// function* gen(){
//     yield* ["a", "b", "c"];
//   }

//   console.log(gen().next() )
//   console.log(gen().next() )
//   console.log(gen().next() )

function* main() {
	var result = yield request('http://some.url')
	var resp = JSON.parse(result)
	console.log(resp.value)
}

function request(url) {
	makeAjaxCall(url, function(response) {
		it.next(response)
	})
}

var it = main()
it.next()
