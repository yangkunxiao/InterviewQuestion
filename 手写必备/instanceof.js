function myInstanceof(left,right){
    if(typeof left !== 'object' || right === null) return false;
    let proto = Object.getPrototypeOf(left);
    while(true){
        if(proto === null) return false;
        if(proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

const flag = myInstanceof(new String('str'),Object);
console.log(flag)