//考察arguments

/**
 * a.fn => a[fn]
 * arguments.[0] => arguments.0   this => arguments
 */

function fn() {
    console.log(this.length); // 0 2
    // window.length = 0
    //如果window中有iframe 则为iframe的数量
}
var yideng = {
    length: 5,
    method: function() {
        "use strict";
        fn(); //严格模式下 this => null
        arguments[0]()

    }
}
const result = yideng.method.bind(null);
result(fn, 1);

/**
 * callee 和 caller
 * callee指向函数本身
 * caller返回调用指定函数的函数。
 * 如果一个函数f是在全局作用域内被调用的,则arguments.callee.caller为null,
 * 相反,如果一个函数是在另外一个函数作用域内被调用的,则arguments.callee.caller指向调用它的那个函数。
 * 该属性的常用形式arguments.callee.caller替代了被废弃的 arguments.caller
 * 
 */

function yideng(a, b, c) {
    console.log(this.length); // this => arguments  4
    console.log(this.callee); // arguments.callee => fn 即函数本身  1
    console.log(this.caller);
    // console.log(arguments.callee.caller);

}

function fn(d) {
    // yideng()
    arguments[0](10, 20, 30, 40, 50);
}
fn(yideng, 10, 20, 30);