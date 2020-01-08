/**
 * generator:生成器函数
 * 执行生成器函数会返回一个迭代器对象，返回一个指向内部状态的指针对象
 * 然后必须执行迭代器对象的next方法，使指针移动，从函数头部或者上一次停下的地方移动到下一个yield表达式。
 * yield是暂停执行的标志，next可以恢复执行。
 * 如果没有返回值，则默认为undefined
 */
function* foo() {
    let x;
    yield(x = 10);
    yield(y = x + 1);
    return y
}
let s = foo();
// let v1 = s.next();
// let v2 = s.next();
// let v3 = s.next();
// console.log(v1);
// console.log(v2);
// console.log(v3);

//yield作为参数
function* sum() {
    let input = (yield);
    return input
}
let l = sum();
console.log(l.next())
console.log(l.next(3).value)

//对象使用for of

Object.prototype[Symbol.iterator] = function*() {
    for (let key in this) {
        // console.log(this, this[key], '0')
        yield [key, this[key]]
    }
}

// myIterable[Symbol.iterator] = function*() {
//     for (let key in this) {
//         // console.log(this, this[key], '0')
//         yield [key, this[key]]
//     }
// };

for (const key of { c: 0, d: 1 }) {
    console.log(key, '1')
}



function* foo(x) {
    var y = 2 * (yield(x + 1));
    var z = yield(y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log(a.next()); //{ value:6,done:false }
console.log(a.next()); //{ value:NaN,done:false }
console.log(a.next()); //{ value:NaN,done:true }
/**
 * 第一次调用b的next方法时，返回x+1的值6；
 * 第二次调用next方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；
 * 第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13
 */
var b = foo(5);
console.log(b.next()); //{ value:6,done:false }
console.log(b.next(12)); // y = 24  { value:8,done:false }
console.log(b.next(13)); //z = 13  5 + 24 + 13 { value:6,done:false }