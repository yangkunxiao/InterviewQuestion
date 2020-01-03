// var yideng = function yideng() {
//     //函数表达式的函数名，在其内部不可改变。
//     yideng = 1;
//     console.log(typeof yideng); //function
// }
// yideng();
// yideng = 1;
// console.log(typeof yideng); //number

// //函数声明的函数名可以改变
// function fn() {
//     fn = 10;
//     console.log(typeof fn); //number
// };

// fn();

// console.log(typeof fn); //number

function yideng() {
    console.log(0);
};
(function() {
    'use strict'
    if (false) {
        function yideng() {
            console.log(1);
        };
    };
    yideng();
})();
//非严格模式：yideng is not a function  严格模式：0