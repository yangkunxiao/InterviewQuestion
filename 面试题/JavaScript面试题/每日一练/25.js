/* //防抖 节流

//简单防抖
function debounce(fn,wait = 1000){
    let timer;
    return function(){
        if(!!timer){
            return
        }
        let arg = Array.from(arguments);
        let context = this;
        timer = setTimeout(() => {
            fn.apply(context,arg);
            timer = null
        },wait)
    }
}


//立即执行的防抖
function debounce(fn,immdiate,wait = 1000){
    let timer;
    return function(){
        if(!!timer){
            return
        }
        let arg = Array.from(arguments);
        let context = this;
        timer = setTimeout(() => {
            // fn.apply(context,arg);
            timer = null
        },wait)
        if(!!timer) fn.apply(context,arg);
    }
}



function fn(){
    console.log(0)
}

let f = debounce(fn,5000)

setInterval(() => {
    f()
}, 1000);
*/


//节流

function throttle(fn,wait){
    let timer = null;
    return function(){
        if(timer) clearTimeout(timer);
        let arg = Array.from(arguments);
        let context = this;
        timer = setTimeout(() => {
            fn.apply(context,arg);
            timer = null
        },wait)
    }
}
function fn(){
    console.log(0)
}

let f = throttle(fn,5000)
let count = 0;
let t = setInterval(() => {
    console.log('---')
    if(count > 5) clearInterval(t)
    f()
    count++
}, 1000);