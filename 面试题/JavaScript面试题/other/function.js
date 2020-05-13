// const fn = () => {
//     console.log('arrow')
// }

// let f = new fn();


// var fun = function(){
//     this.a = 'a'
// }

// var fn = fun.bind({});

// var f = new fn();

// console.log(f.constructor === fun)

// console.log(f.__proto__ === fun.prototype)

// console.log(fn.prototype)//undefined

/**
 * bind后的函数无法再次改变this，其内部会一直缓存只第一次bind的this
 * bind之后的函数可以用作构造函数、其属性来自于第一次bind的函数
*/

/* Function.prototype.call = function(context,...rest){
    let constructor = this;
    let fn = Symbol();
    context[fn] = constructor;
    context[fn](...rest);
    delete context[fn]
}

const obj = {
    a:10
}

function fn(){
    console.log(this.a)
}

// let f = new fn()
fn()
fn.call(obj) */



/* Function.prototype.new  = function(...rest){
    let constructor = this;
    let obj = Object.create(constructor.prototype);
    let res = constructor.apply(obj,rest);
    if(res && (typeof res === 'function' || typeof res === 'object')){
        return res
    }
    return obj
}

function fn(name){
    this.name = name
    this.getName = function(){
        return this.name
    }
}

let f = fn.new('kaka')

console.log(f.getName()) */
// console.log(sum);//function
sum(1,2,3,4);
function sum(a,b){
    console.log(sum.length,arguments.length);
    console.log(sum);//function
    sum = 100;//执行到这 sum提升到全局  和 块级作用域顶端
    console.log(sum)//访问的是块级作用域的sum
}
// var sum = 10
console.log(sum)//100
var sum;
sum = 10
console.log(sum);//number
// sum = 1000;
// console.log(typeof sum)//number



/* var fn = function fn(){
    console.log(fn)//访问的是函数fn 而函数的configerable为false 不可更改
    // console.log(Object.getOwnPropertyDescriptor(window,'fn'))
    fn = 10;//无效
    console.log(fn)//function
}
fn()
console.log(fn)//function */