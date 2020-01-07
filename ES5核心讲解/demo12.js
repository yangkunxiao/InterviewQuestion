Object.prototype.a = 'a';
Function.prototype.a = 'a1';

function Person() {};

var yideng = new Person();

console.log(Person.a);
console.log(yideng.a);
console.log(1..a);
// console.log(1. a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);

//预期结果：a1 a a  Function(){}  

/**
 * 实例的隐式原型等构造函数的显示原型：
 * yideng.__proto__ = Person.prototype
 * Person.prototype.__proto__ = Object.prototye
 * Object.prototype.__proto__ = null
 * 
 * 函数本身也是对象
 * Person.__proto__ = Function.prototype
 * Function.prototype = Function.__proto__
 * 
 * Function.prototype.__proto__ = Object.prototype
 * 
 */