//函数构造器
// var func = new Function('first', 'second', 'return first + second')

// console.log(func(1,2))

// var doSomething = function doElse(){}

// console.log(doSomething.name)//doElse
//查看调用栈
/* var doSomething = function doSomething() {
    //此时doSomething找的是函数本身 
    doSomething = 10
	console.log(typeof doSomething) //function
}

console.log(doSomething)

var doSomething = function() {
    //此时doSomething指向全局下的doSomething
    doSomething = 10
	console.log(typeof doSomething) //number 10
}

function doSomething(){
    doSomething = 10 //10
    console.log(typeof doSomething)//function
}

doSomething() */

// function test(){
//     this.a = 10
// }

// test.prototype.age = 1

// var test = () => {
//     this.a = 1
// }

// let fn = test.bind(null);

// let a = new fn()

// console.log(a)

/**
 * JS为函数提供了两个内部方法：[[call]] [[constructor]]
 * 当不使用new时，调用的时[[call]] 方法 执行的是函数题
 * 当使用new时 调用的时[[constructor]] 方法，返回一个新对象，并且使用新对象作为this去执行函数体。
 * 只有拥有了[[constructor]] 才可以成为构造函数
 */

//es5如何确定函数是否使用new调用
// function Person(name){
//     if(this instanceof Person){
//         this.name = name
//     }else {
//         throw Error('you must use new with person')
//     }
// }

// let p = new Person('kaka');

// // let p1 = Person('hudie')//报错
// //因为使用[[constructor]]的时候，js引擎内部会创建一个Person新实例，并赋值给htis。

// let p2 = Person.call(p,'hd');//这样使用call重新指定this指向 就可以骗过检查。

//es6做的更新

//new.target 元属性 元属性指的是非对象上的属性，如通过new得到的对象，并且元属性会提供关联到它的目标的附加信息。
//当[[constructor]] 被调用时，new.target会被填入到new操作符的作用目标，且该目标通常指的时被创造的实例对象的构造函数，
//并且会成为函数体内部的this。
//而如果[[call]] 被调用则new.target指向undefined


// console.log(typeof doSomething,0)
// if (true) {
// 	console.log(typeof doSomething)
// 	function doSomething() {
// 		// ...
// 	}
// 	doSomething()
// }
// console.log(typeof doSomething)


// console.log(a);
// if(true){
//     a = 10
// }
// console.log(a)
a = 10
let fn = () => {
    console.log(this)
    console.log(this.a)
}
let obj = { a:100 }

let fns = fn.bind({a:0})

obj.fns = fns;

obj.fns()//10

fns()

/**
 * 箭头函数和普通函数的区别
 * - 没有this  内部的this指向的是最近的非箭头函数的this指向  this是定义时确定  而传统函数的this是执行的时候确定
 * - 没有arguments arguments指向的是最近的非箭头函数的arguments指向
 * - 没有super super指向的是最近的非箭头函数的super指向
 * - 不能使用new 因为内部没有[[constructor]]
 * - 没有原型
 * - 不能使用apply call bind改变this
 * 
 * - 其他和正常函数一样
*/
