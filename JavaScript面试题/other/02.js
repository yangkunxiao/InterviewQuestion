//防抖
/**
 * 防抖：防止高频事件被频繁触发 规定时间内如果再次触发 则重新计算时间
 * @param {Function} fn 回调函数
 * @param {number} awit 延迟时间
 */

function douncing(fn,awit = 1000){
    let timer = null;
    let _this = this;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(_this,arguments);
            timer = null;
        },awit)
    }
}

const handlerClick = throttle(() => {
    console.log('kaka')
},3000)


//节流
/**
 * 节流：防止高频事件多次触发 规定时间内只能触发一次 稀释事件
 * @param {Function} fn 回调函数
 * @param {number} awit 延迟时间
 */
function throttle(fn,awit = 1000){
    let timer = null;
    const _this = this;
    return function(){
        if(timer) return ;
        timer = setTimeout(() => {
            fn.apply(_this,arguments);
            timer = null
        },1000)
    }
}