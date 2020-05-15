//能否以下面这种方式使用展开运算符 而不导致类型错误
var obj = {
    x:1,
    y:2,
    z:3
};

//可以

/**
 * 展开运算符和for of内部是使用iterator对象实现的 只要对象具有iterator接口即可使用
 */

function createIterator(obj){
    let items = Object.entries(obj),
        len = items.length,
        i = 0;
    return {
        next:function(){
            let done = i < len ? false : true;
            let value = items[i];
            i++;
            return {
                done,
                value
            }
        }
    }
}

 obj[Symbol.iterator] = () => createIterator(obj);


let arr = [...obj]

console.log(arr)