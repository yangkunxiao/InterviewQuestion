//输出斐波那契数列第n项
function Fibonacci(n){
    if(n <= 0) return 0;
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n]
}
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))

//1 1 2 3 5 8