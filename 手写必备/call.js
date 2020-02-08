Function.prototype.newcall = function(context,...params){
    const Constructor = this;
    if(context instanceof Object){
        context = context || window;
    }else {
        context = Object.create(null);
    };
    const fn = Symbol();
    context[fn] = Constructor;
    context[fn](...params);
    delete context[fn];
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

fn.newcall(obj);
