/* //原型对象

let person = {
	getGreeting() {
		return 'Hello'
	},
}
let dog = {
	getGreeting() {
		return 'Woof'
	},
}
let friend = {
	getGreeting() {
        //附加的 call(this) 代码则能确保正确设置原型方法内部的 this 值。
        //调用原型上的方法时要记住使用 Object.getPrototypeOf() 与 .call(this)
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!'
        
        //super
        return super.getGreeting() + ',hi!'
	},
}


Object.setPrototypeOf(friend, person); 
console.log(friend.getGreeting());//hello hi
console.log(Object.getPrototypeOf(friend) === person)//true

Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());//woof hi
console.log(Object.getPrototypeOf(friend) === dog);//true



 */

/* let person = {
	getGreeting() {
		return 'Hello'
	},
}
// 原型为 person
let friend = {
	getGreeting() {
        // console.log(this === relative)//true  Object.getPrototypeOf(this) --> friend
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!'
        
        //super 因为super不是动态的 无论对象继承了多少次 都是执行person

        return super.getGreeting() + ',hi'
	},
}
Object.setPrototypeOf(friend, person)
 // 原型为 friend
let relative = Object.create(friend)

console.log(person.getGreeting())//hello
console.log(friend.getGreeting())//hello hi
//此时调用relative.getGreeting时 this指向relative 会发生重复调用，最终爆栈
console.log(Object.getPrototypeOf(relative) === friend)
console.log(relative.getGreeting() )//爆栈 */


//HomeObject
// es6规定，方法拥有一个内部属性[[HomeObject]] 该属性指向拥有方法的对象
//任何对super的引用都是使用[[HomeObject]]来判断要做什么
//第一步：使用[[HomeObject]]的Object.Prototype来获取对原型对象的引用
//第二步：在原型对象上寻找同名方法
//第三步：创建this并绑定调用该方法

let friend = {
    getGreeting(){//它的[[HomeObject]]执行friend
        return 'hello'
    }
}
//该方法无[[HomeObject]] 属性
// function getGreeting(){

// }

let person = {
    getGreeting(){//此时super会找到getGreeting的[[HomeObject]]，即person 然后寻找person的原型对象，即friend
        return super.getGreeting() + ',hi'
    }
}

Object.setPrototypeOf(person,friend);

console.log(person.getGreeting())//hello hi