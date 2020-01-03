/**
 * 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
 *  要求:汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
 * Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句:将 红色的 Cruze买给了小王价格是14万。
 */


//原型链继承 引用类型的属性会共享
//构造函数继承 浪费内存 代码复用率低
//混合继承：原型链继承方法和静态属性 构造函数继承实例属性

//父类
// function Car(color, price) {
//     this.color = color;
//     this.price = price;
//     // this.books = ['1', '2']
// }
// Car.prototype.sale = function(seller) {
//     console.log(`${this.color}的车以${this.price}的价格卖给了${seller}`);
// };

// Car.prototype.books = ['1', '2'];
// //子类
// function Cruze(color, price) {
//     this.color = color;
//     this.price = price;
//     Car.call(this, color, price)
// }
// Cruze.prototype = Object.create(Car.prototype, {
//     constructor: {
//         value: Cruze
//     }
// })

/**
 * Car.prototype.isPrototypeOf(cruze) //true
 * Cruze.prototype.isPrototypeOf(cruze)//true
 * 
 * cruze instanceof Car //true
 * cruze instanceof Cruze //true
 */

//静态基本属性不会共享，引用属性共享
// class Car {
//     static a = 10;
//     static b = { c: 100 }
//     constructor(color, price) {
//         this.color = color;
//         this.price = price;
//     }

//     sale(seller) {
//         console.log(`${this.color}的车以${this.price}的价格卖给了${seller}`);
//     }
// }

// class Cruze extends Car {
//     constructor(color, price) {
//         super(color, price)
//     }
// }

// let cruze = new Cruze('红书', '140000');
// cruze.sale('小王');

// cruze.books.push(3);

// let cruze2 = new Cruze('红书2', '130000');
// cruze2.sale('小红');

// console.log(cruze.books);
// console.log(cruze2.books);


function Person() {

}

var boy = new Person();

Person.prototype = {
    getName() {
        return 'kaka'
    }
}

// boy.getName()// TypeError: boy.getName is not a function