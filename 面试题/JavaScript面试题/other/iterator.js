let obj = {
    a:10,
    b:20
}

obj[Symbol.iterator] = function* (){
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key]
        yield [key,value]
    }
}

for (const item of obj) {
    console.log(item)
}