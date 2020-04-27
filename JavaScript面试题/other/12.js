//简单实现vue中Object.definePrototype

function defineReactive (obj,key,value){
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function defineGet(){
            console.log(`获取${key}的值：`,value)
            return value
        },
        set:function defineSet(newValue){
            console.log(`设置${key}的值：`,newValue);
            value = newValue;
        }
    })
}


function observe(target){
    let keys = Object.keys(target);
    for (let i = 0,len = keys.length; i < len; i++) {
        const key = keys[i];
        defineReactive(target,key,target[key])
    }
}


let arr = [1,2,3]
let obj = {
    name:'hudie'
}

// observe(arr)
observe(obj)

// arr[2]

// arr[0] = 4

obj.name = 'kaka'

console.log(obj.name)