const throttle = (fn,wait) => {
    let timer = null;
    return function(...rest){
        let context = this;
        if(timer !== null){
            return
        }
        timer = setTimeout(() => {
            fn.apply(context,rest);
            timer = null
        }, wait);
    }
}


const debounce = (fn,wait,immdaite) => {
    let timer = null;
    return function(...rest){
        let context = this;
        if(immdaite){
            fn.apply(context,rest);
        }
        if(timer){
            clearInterval(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(context,rest);
            timer = null
        }, wait);
    }
}


Function.prototype.myCall = function(target,...rest1){
    let constructor = this;
    const fn = Symbol();
    target[fn] = constructor;
    target[fn](...rest1)
    delete target[fn]
}

const obj = {
    a:10,
    b:20,
    getMoney(){
        console.log(this.a)
    }
}

function fn(){
    console.log(this.a)
}
fn()

let res = fn.myCall(obj);

fn()

// fn.call(obj)

let f = new fn();

console.log(res)

console.log(f.a)



Function.prototype.myBind = function(target,...rest1){
    let constructor = this;
    return function(...rest2){
        constructor.apply(target,[...rest1,...rest2])
    }
}