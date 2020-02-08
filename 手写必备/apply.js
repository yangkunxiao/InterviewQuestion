Function.prototype.newapply = function(context,params){
    console.log(params)
    const Constructor = this;
    if(context instanceof Object){
        context = context || window;
    }else {
        context = Object.create(null);
    }
    const fn = Symbol();
    context[fn] = Constructor;
    context[fn](params);
    delete context[fn];
}

const obj = {
    a:10,
    v:100
}

function fn(){
    console.log(this.a)
}

fn.newapply(obj,[1,2,3])