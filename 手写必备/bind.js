Function.prototype.newbind = function(context,...params){
    console.log(params)
    const Constructor = this;
    return function(...rest){
        Constructor.apply(context,[...params,...rest])
    }
}

const obj = {
    a:10,
    b:100
}

function fn(){
    console.log(this.a)
}

const f1 = fn.newbind(obj,1,2,3,4);

f1()