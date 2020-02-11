/**
 * JSON.stringify:
 * 1、如果对象有自定义的toJSON()方法，则使用自定义方法
 * 2、布尔、数字、字符串被转换为对应的原始值
 * 3、undefined function symbol转换时被忽略，如果出现在数组中，则返回null
 */

function JSONString(obj) {
    //获取传入的值的数据类型
    let type = typeof obj;
    if (type !== 'object') {
        if (!/('function'|'undefined'|'symbol')/.test(type)) {
            return '"' + obj + '"'
        }
    } else {
        let arr = [];
        //是否是数组
        let isArray = obj && obj.constructor === Array;
        loop: for (let key in obj) {
            let value = obj[key];
            let typeValue = Object.prototype.toString.call(value);
            if (typeValue === '[object Symbol]' || typeValue === '[object Undefined]' || typeValue === '[object Function]') { //symbol 类型 
                continue loop;
            } else if (typeValue === '[object Object]' || typeValue === '[object Array]') {
                value = JSONString(value);
            }
            let v = isArray ? `${String(value)}` : `"${key}":${String(value)}`;
            arr.push(v)
        };
        let str = isArray ? (`"[${String(arr)}]"`) : (`{${String(arr)}}`);
        return str;
    }

};

let obj = {
    a: 10,
    b: function() {},
    c: true,
    d: Symbol(),
    e: [1, 2, 3, { a: 100 }],
    f: null,
    g: undefined
};
let s = JSONString(obj);
console.log(s);