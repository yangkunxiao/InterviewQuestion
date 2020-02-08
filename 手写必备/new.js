//手写new操作符
/**
 * new操作符做了什么？
 * 1、新建一个对象
 * 2、将继承构造函数的原型
 * 3、改变构造函数的this指向
 * 4、返回对象（如果函数没有返回对象类型，则返回该对象的引用）
 */
Function.prototype.new = function() {
    //获取参数
    const args = Array.prototype.slice.call(arguments);
    //获取构造函数 即this
    let Controuctor = this;
    //新建对象
    let obj = Object.create(null);
    Object.setPrototypeOf(obj, Controuctor.prototype);
    //改变构造函数this指向
    let res = Controuctor.apply(obj, args);
    if (res !== null && (typeof res === 'function' || typeof res === 'object')) {
        return res;
    };
    return obj
};

function fn() {
    let args = Array.prototype.slice.call(arguments);
    this.getName = function() {
        console.log(args)
    }
};

let f = fn.new(1, 2, 3);

f.getName()