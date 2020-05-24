/**
 * 尾调用：函数最后一步执行时 调用另一个函数 称为尾调用
 * 尾递归：函数最后一步执行时 调用函数本身 称为尾递归
 * 
 * 我们知道函数在执行时，js引擎会将当前函数的执行期上下文押入执行栈中，保存当前函数的调用位置和内部变量等信息
 * 如果函数中调用了新的函数，则新的函数的执行期上下文也会被押入执行栈，
 * 如果一个栈中保存了大量的栈桢，那么就势必会造成内存泄漏、爆栈等。
 * 
 * 而尾调用优化则是在函数最后一步执行时执行，调用栈之后保留一个调用栈桢信息。
 * 尾调用优化允许某些函数的调用被优化，以保持更小的调用栈、使用更少的内存，并防止堆 栈溢出。
 * 当能进行安全优化时，它会由引擎自动应用。不过你可以考虑重写递归函数，以便 能够利用这种优化。
 * 
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生"栈溢出"错误（stack overflow）。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生"栈溢出"错误。
 * 
 * 
 * 当满足一下条件时 尾调用优化会清除当前桢栈并再次利用：
 * - 无闭包。即当前执行函数不使用函数外部的变量
 * - 进行尾调用的函数的返回值返回之后不做其他操作
 * - 尾调用函数作为函数的返回值执行，即是函数最后一步
*/

//斐波那契数列 0 1 1 2 3 5 8
// function Fibonacci(n){
//     if(n <= 2) return 1;
//     return Fibonacci(n-1) + Fibonacci(n-2)
// }

//优化

//动态规划
function Fibonacci(n){
    let current = 0,
        next = 1,
        tmp;
    for (let i = 0; i < n; i++) {
        tmp = current;
        current = next;
        next += tmp;
    }
    console.log(current)
}

//尾递归优化
// function Fibonacci(n,current = 0,next = 1){
//     if(n == 0) return 0;
//     if(n == 1) return next;
//     return Fibonacci(n-1,next,current + next)
// }

console.log(Fibonacci(2))
console.log(Fibonacci(4))
console.log(Fibonacci(5))


//阶乘

// function factorial(n){
//     if(n <= 1) return n

//     return n * factorial(n - 1)
// }

//优化
// function factorial(n,total = 1){
//     if(n <= 1) return total
//     return factorial(n-1,total * n)
// }

// let res = factorial(5);

// console.log(res)
