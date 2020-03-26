//深拷贝

//判断类型
function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}
//判断是否是原始类型类型 
function isRefrenceType(target) {
    let type = typeof target;
    return (target !== null && (type === 'object' || type === 'function'))
}
//获取原型上的方法
function getInit(target) {
    let ClassNames = target.constructor;
    return new ClassNames();
}

//引用类型
const mapTag = 'Map';
const setTag = 'Set';
const arrayTag = 'Array';
const objectTag = 'Object';

//非引用类型
const errorTag = 'Error';
const numberTag = 'Number';
const dateTag = 'Date';
const regexpTag = 'RegExp';
const stringTag = 'String';
const symbolTag = 'Symbol';
const bufferTag = 'Uint8Array';

let deepTag = [mapTag,setTag,arrayTag,objectTag];

function deepClone(target,map = new WeakMap()){
    let type = getType(target);
    let isRefrence = isRefrenceType(target);
    if(!isRefrence){//如果是非引用类型 直接返回
        return target
    }
    let cloneTarget;
    if(deepTag.includes(type)){//如果是引用类型 获取其原型
        cloneTarget = getInit(target)
    }

    if(map.get(target)){//防止存在循环引用
        return map.get(target)
    }
    map.set(target,cloneTarget);

    if(type === mapTag){
        target.forEach((value,key) => {
            cloneTarget.set(key,deepClone(value,map))
        });
        return cloneTarget
    }

    if(type === setTag){
        target.forEach(value => {
            cloneTarget.add(deepClone(value,map));
        });
        return cloneTarget
    }

    if(type === arrayTag){
        target.forEach((value,key) => {
            cloneTarget[key] = deepClone(value,map)
        });
        return cloneTarget
    }

    if (type === objectTag) {
        let array = Object.keys(target);
        array.forEach((i, v) => {
            cloneTarget[i] = deepClone(target[i], map)
        });
        return cloneTarget;
    }
    // if(typeof target === 'object'){
    //     let res = Array.isArray(target) ? [] : {};
    //     if(map.get(target)){
    //         return map.get(target)
    //     }
    //     map.set(target,res);
        
    //     for (const i in target) {
    //         res[i] = deepClone(target[i],map)
    //     }
    //     return res;
    // }else {
    //     return target
    // }
}

const map = new Map();

map.set('key', 'value');

map.set('name', 'kaka')



const set = new Set();

set.add('11').add('12')

let obj = {
    a: 1,
    b: {
        c: {
            d: function() {
                console.log(1)
            }
        }
    },
    f:[1,2,3,{ g:function(){} }],
    g:null,
    h:undefined,
    m:true,
    k:'🍌',
    map,
    set
};
obj.obj=  obj;
let obj1 = deepClone(obj);
obj1.a = 2;
console.log(obj);
console.log(obj1)