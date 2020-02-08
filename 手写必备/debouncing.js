/*** 
 * @description 防抖函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate 是否立即执行
 * */
function debouncing(func, wait = 1000, immediate = true) {
    let timer = null;
    return function () {
        let args = arguments;
        let context = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (!immediate) {
            //第一种：n秒之后执行，n秒内再次触发会重新计算时间
            timer = setTimeout(() => {
                //确保this指向不会改变
                func.apply(context, [...args]);
            }, wait);
        } else {
            //第二种：立即执行，n秒内不可再次触发
            let callnew = !timer;
            timer = setTimeout(() => {
                timer = null;
                console.log('kaka')
            }, wait);
            if (callnew) func.apply(context, [...args])
        }
    }
}

function fn() {
    console.log('debluncing')
}

let f1 = debouncing(fn, 1000);

setInterval(() => {
    f1()
}, 1000);
