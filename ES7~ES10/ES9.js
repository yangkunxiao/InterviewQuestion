/**
 * 异步迭代器:
 * 和同步迭代器相比：
 *  next：
 *      同步：=》{ key value }
 *      异步：=》 promise
 *  同步迭代器 配合for...of使用
 *  异步迭代器 配合for...await...of
 */

//模拟 并不是真正的异步迭代器
/* const createAsyncIterator = obj => {
    let keys = Object.keys(obj);
    let count = 0;
    return {
        next() {
            const done = count >= keys.length;
            return Promise.resolve({
                value: !done ? obj[keys[count++]] : undefined,
                done
            })
        }
    }
};

const asyncIterator = createAsyncIterator({ a: 10, b: 20 }); 

asyncIterator.next().then(res => {
    console.log(res, 'res')
});
asyncIterator.next().then(res => {
    console.log(res, 'res')
});
asyncIterator.next().then(res => {
    console.log(res, 'res')
});
*/

//遍历异步迭代器
/* const asyncItems = {
    a: 'kaka',
    b: function() {},
    c: 1,
    [Symbol.asyncIterator]: function() {
        let _this = this;
        let keys = Object.keys(_this);
        let count = 0;
        return {
            next() {
                const done = count >= keys.length;
                return Promise.resolve({
                    value: !done ? _this[keys[count++]] : undefined,
                    done
                })
            }
        }
    }
};
async function fn(obj) {
    for await (const key of obj) {
        console.log(key)
    }
};
fn(asyncItems) */

/**
 * 异步生成器
 */
/* async function* fn() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

const fn1 = fn();

async function f(items) {
    for await (const value of items) {
        console.log(value)
    }
};
f(fn1) */


/**
 * Promise.finally()
 * Rest/Spread 在ES6中 扩展运算符只用于数组，在ES9新增对象扩展运算符
 */

/**
 * 正则自定义名称:?<name>
 */
//ES9之前
/* const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const str = '2020-01-12';
const res = reg.exec(str);
console.log(res[0], res[1], res[2], res[3]);

//ES9之后
const reg1 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const str1 = '2020-01-12';
const res1 = reg1.exec(str1);
console.log(res1.groups.year, res1.groups.month, res1.groups.day);

const newDate = str1.replace(reg1, `$<day>-$<month>-$<year>`)
console.log(newDate) */

/* 
const str = '$123456a123';
//先行断言
const res = /\D(?=\d+)/.exec(str);
//后行断言
const res1 = /(?<=\D)\d+/.exec(str);
console.log(res1) */

//汉字匹配

//ES9之前
const reg = /[\u4e00-\u9fa5]/;
//ES9
const reg1 = /\p{Script=Han}/u;

const str = '你好 世界'

console.log(reg1.test(str))