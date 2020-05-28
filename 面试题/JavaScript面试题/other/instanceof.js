function myInstanceof(left,right){
    let proto = left.__proto__;
    let prototype = right.prototype;
    while(true){
        if(proto === null){
            return false
        }else if(proto === prototype){
            return true
        }
        proto = proto.__proto__ 
    }
}

function fn(){

}

let f = new fn();

console.log(f.__proto__ === fn.prototype)

console.log(myInstanceof(f,fn))