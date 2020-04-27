//判断num是否为质数
var isPrime = function(num){
    if(num < 2){
        return false
    }else if(num == 2){
        return true
    }else if(num % 2 == 0){
        return false
    }
    let i = 2;
    while(i<num){
        if(num % i == 0){
            return false
        }
        i += 2
    }
    // for (let i = 2; i < num; i++) {
    //     if(num % i === 0){
    //         return false
    //     }
    // }
    return true
}

console.log(isPrime(5))