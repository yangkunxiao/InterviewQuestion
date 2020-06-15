// console.log(typeof a);//function

// a();//function

// var a = 3;

// function a() {
//   console.log(typeof a);
// }

// console.log(typeof a);//number

// a = 6;

// a();//a is not a function

// f();
// fn(); //fn is not a function
// //函数表达式 声明fn提升，但是尚未赋值
// var fn = function () {
//   console.log(1);
// };
// //函数声明
// function f() {
//   console.log(0);
// }

// console.log(a); //undefined
// console.log(fn); //undefined
// var flag = true;
// if (!flag) {
//   var a = 1;
// }
// if (true) {
//   function fn(a) {
//     yideng = a;
//     console.log("yideng1");
//   }
// }
// console.log(a); //undefined
// console.log(fn); //function

// console.log(window.a,a);//undefined undefined

// {
//   a = 5;

//   function a() {}

//   console.log(window.a, a); //5 5

//   a = 0;

//   console.log(window.a, a); //5 0
// }

// console.log(window.a, a); //5 5

// 'use strict'

// console.log(a);//undefined  undefined

// console.log(f);//undefined  f is not defined

// var flag = true;

// if (!flag) {
//   var a = 1;
// }

// if (flag) {
//   function f(a) {
//     f = a;
//     console.log("yideng1");
//   }
// }

// console.log(typeof f);//function

// //函数声明 函数名可以改变
// function f() {
//   console.log(typeof f); //function
//   // var f = 3;
//   f = 3;
//   console.log(typeof f); //number
// }

// f();

// //函数表达式  函数名不可以改变 只可以在函数作用域内使用 改变语句会被忽略
// var s = function s() {
//   console.log(typeof s); //function
//   // var s = 3;
//   s = 3;
//   console.log(typeof s); //function
// };

// s();

//块级作用域的函数提升以及变量提升

//例1

//此时a并不会提升，块级作用域中只有使用var声明的变量才会提升 而默认声明的变量只有执行到声明语句之后才会赋值到全局
// console.log(a);//ReferenceError: a is not defined
// {
//   a = 10;
//   console.log(a)//10
// }
// console.log(a);//10

// console.log(window.a);//undefined a is not defined
// {
//   console.log(window.a);//undefined  、a is not defined
//   a = 10;
//   console.log(window.a,a)//10 10
// }
// console.log(window.a,a);//10 10

//例2 块级作用域函数
//块级作用域函数的函数声明会被提升到全局作用域中，且声明函数同时也会被提升到块级作用域顶部  但是只有执行到函数声明语句之后，才会复制到全局作用域


// console.log(window.a, a); //undefined
// {
//   console.log(window.a, a);//undefined function

//   function a() {}

//   console.log(window.a, a);//function function 
// }

// console.log(window.a, a);//function function 


//块级作用域中有同名的变量和函数声明

//可以借助控制台 查看此时的scope chain
console.log(window.a, a); //undefined undefined

{
  console.log(window.a, a);//undefined function
  a = 10;
  console.log(window.a, a);//undefined 10
  function a() {}
  console.log(window.a, a);//10 10
}
console.log(window.a,a);//10 10
