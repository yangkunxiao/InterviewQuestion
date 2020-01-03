var length = 10;

function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};
yideng.method(fn, 1);

/**
 * 第一次执行fn的时候：this指向window，此时this.length = 10
 * 使用arguments[0]()执行fn的时候，此时，this指向arguments，此时this.length = arguments.length = 2
 * 
 */


/**
 * arguments:它是一种类数组对象 { '0':1,length:1 }
 * 非严格模式下 true
 * 严格模式下 false 此时arguments报存的就是最初的形参
 * 转数组： 使用 Array.prorotype.slice.call(arguments)
 * 
 */

function fn(a) {
    'use strict'

    a = 10;
    console.log(a === arguments[0], arguments[0]);
}

fn(1);