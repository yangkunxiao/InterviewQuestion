/**
 * @description curry 函数柯里化
 * @param func 函数
 * @return 函数
 */
function curry(func) {
    //获取第一次传入的参数
    let outargs = Array.from(arguments).slice(1);

    function inner() {
        const innerargs = Array.from(arguments);
        outargs = outargs.concat(innerargs);
        return inner;
    }

    inner.toString = function () {
        return func.call(null, ...outargs)
    }

    return inner;
}

function fn(...rest) {
    return rest.reduce((preValue, currentValue) => {
        return preValue * currentValue
    })
}

var f1 = curry(fn);

console.log(f1(1,2),'res')