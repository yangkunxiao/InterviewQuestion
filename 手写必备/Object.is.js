function is(x,y){
    if(x === y){
        //处理+0 和 -0 ：1/+0 +Infinity  1/-0 -Infinity 
        return x !== 0 || y !== 0 || 1/x === 1/y;
    }else {
        //处理NaN
        return x !== x && y !== y
    }
}
console.log(is(+0,-0))
console.log(is(NaN,NaN))
console.log(is('1',1))