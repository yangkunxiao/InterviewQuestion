// class Person {
//      name;
//      age;
//      constructor(name,age){
//          this.age = age;
//          this.name = name
//      }
//      getName(){
//          if(this instanceof Person){
//              console.log(0)
//          }
//      }
// }

// let p = new Person('kaka',25)

// console.log(p.name,p.age);

// console.log(typeof Person);//function

// p.getName()

// const Person = function(name,age){
//     this.name = name;
//     this.age = age;
//     //es5中检验是否使用了new
//     // if(this instanceof Person){
//     //     console.log(0)
//     // }

//     //es6中检验
//     //元属性 是指一个提供目标相关额外信息（比如new）的非对象属性。
//     if(typeof new.target !== 'undefined'){
//         console.log(0)
//     }
// }

// let p = new Person('kaka',25)

// let s = Person.call(p,'k',23);

// console.log(p,s)

//类表达式 ： 匿名类表达式
// let PersonClass = class {
//   // 等价于 PersonType 构造器
//   constructor(name) {
//     this.name = name;
//   }
//   // 等价于 PersonType.prototype.sayName
//   sayName() {
//     console.log(this.name);
//   }
// };

//具名类表达式
// PersonClass = class PersonClass2 {
//   // 等价于 PersonType 构造器
//   constructor(name) {
//     this.name = name;
//     //只能在类的内部使用 在外边均为undefined
//     console.log(typeof PersonClass2);
//   }
//   // 等价于 PersonType.prototype.sayName
//   sayName() {
//     console.log(this.name);
//   }
// };

//等价于
// let PersonClass = (function() {
//     const PersonClass2 = function(name){
//         if(typeof new.target == 'undefined'){
//             throw new Error('Constructor must be called with new')
//         }
//         this.name = name;
//     }
//     Object.defineProperty(PersonClass2.prototype,'sayName',{
//         value:function(){
//             if (typeof new.target !== "undefined") {
//                 throw new Error("Method cannot be called with new.");
//             }
//             console.log(this.name);
//         },
//         enumerable:false,
//         configurable:true,
//         writable:true
//     })
//     return PersonClass2
// }())

// let p3 = new PersonClass('kaka');

// p3.sayName()

// console.log(typeof PersonClass); // "function"
// console.log(typeof PersonClass2);// "undefined"

// class Rectangle {
//     constructor(length,width){
//         this.width = width;
//         this.height = length;
//     }

//     getArea(){
//         return this.width * this.height
//     }

//     static createRectangle(length,width){
//         return new Rectangle(length,width)
//     }
// }

// class Square extends Rectangle {
//     constructor(length){
//         super(length,length)
//     }
// }

// let rect = Square.createRectangle(3,4);

// console.log(rect instanceof Square);

// console.log(rect instanceof Rectangle);

// console.log(rect.getArea());

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
var x = new Square(3);
console.log(x.getArea());
console.log(x instanceof Rectangle);
