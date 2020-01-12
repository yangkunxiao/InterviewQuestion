/*************************************** 迭代器Iterator************************************/
//Iterator遍历器
/**
 * 遍历器（Iterator）
 * 它是一种接口，为各种不同的数据结构提供统一的访问机制。
 * 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 * 
 * Iterator 的作用有三个：
 * 一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费
 * 
 * Iterator 的遍历过程是这样的：
 * 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 * 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
 * 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 * 不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 * 
 * 指针对象的next方法，用来移动指针。
 * 开始时，指针指向数组的开始位置。
 * 然后，每次调用next方法，指s针就会指向数组的下一个成员
 */

/* var obj = {
    a: 10,
    b: 20,
    c: 30
};
//给对象添加迭代器
obj[Symbol.iterator] = function() {
    let _this = this;
    let keys = Object.keys(_this);
    let count = 0;
    return {
        next() {
            const done = count >= keys.length;
            return {
                value: !done ? _this[keys[count++]] : undefined,
                done
            }
        }
    }
};

for (const keys of obj) {
    console.log(keys)
} */

/* 

const createAsyncIterator = obj => {
    let keys = Object.keys(obj);
    let count = 0;
    return {
        next() {
            const done = count >= keys.length;
            return {
                value: !done ? obj[keys[count++]] : undefined,
                done
            }
        }
    }
};

function* makeIteratorForObject(obj) {
    for (let key in obj) {
        yield [key, obj[key]]
    }
}

//添加到对象原型上
Object.prototype[Symbol.iterator] = function*() {
    for (let key in this) {
        yield [key, this[key]]
    }
}


let obj = makeIteratorForObject({ a: 10, b: 20, c: 30 })

for (const key of obj) {
    console.log(key)
} */





/*************************************** 生成器Generator************************************/
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