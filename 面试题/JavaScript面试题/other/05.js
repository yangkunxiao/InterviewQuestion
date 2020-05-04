function flat(array){
    if(array === null || !Array.isArray(array)){
        return 
    }
    let arr = array.flat(Infinity);
    let set = new Set(arr);
    let result = [...set].sort((a,b) => {
        return a - b
    })
    return result
}

let array = [3,2,5,2,6,3,1];
console.log(flat(array))