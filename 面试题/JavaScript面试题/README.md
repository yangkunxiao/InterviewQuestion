#### 作用域和作用域链
JavaScript采用的是词法作用域，函数的作用域在定义的时候就已经决定。如：
```javascript
var value = 10;
function foo(){
    console.log(value)
}
function bar(){
    var value = 20;
    foo()
}
bar()
```
如果JavaScript采用的是动态作用域，那么此时打印的value应该为20。当执行函数foo的时候，此时foo内部没有声明value，此时会向上寻找value，找到bar中的value，则打印20.
而此时打印的却是10，则证明函数的作用域是定义时决定的。

***执行上下文（Excution Context***、***执行上下文栈*** 、***变量对象（Variable Object）*** 、***活动对象（Action Object）***

执行上下文（Excution Context）：JS引擎在初始化的时候，会创建执行上下文栈ECS、执行上下文ES以及和之对应的变量对象VO，最大的VO就是全局变量对象GO（Global Object）。
如上面的代码所示：当代码执行的时候：
```javascript
var ECStack = [];
//执行bar
ECStack.push(bar)
//执行foo
ECStack.push(foo)
//执行完
ECStack.pop(foo)
ECStack.push(bar)

```

全局上下文GO：全局最大的变量对象就是GO。

函数上下文：在函数执行上下文中，使用AO表示变量对象，此时变量对象是由arguments构成。当JS引擎执行到函数时，就会激活AO。

进入执行上下文：
- 如果是全局上下文：变量对象中最初只包含：函数声明、变量声明

- 如果是函数上下文：活动对象包含arguments

执行代码：


在执行代码进行标识符解析的时候，会根据标识符是作为赋值对象还是寻值对象，进行LHS和RHS查找，如果当前变量对象中没有定义该标识符，则会进入父级的上下文中寻值，如果一直没有找到，最终就是找到GO。如果此时仍然没有找到，如果此时为LHS查找，则会在全局对象新增一个属性；如果为RHS，则会报错，ReferenceError xxx is not defined。



#### 原型和原型链

每一个函数在被创建的时候会自动生成一个\[\[scope\]\]属性，该属性是一个指针，执行该函数的原型对象。原型对象也会有一个contructor属性，该属性指向原型对象的构造函数。当构造函数实例化一个对象时，实例会具备一个隐式原型__proto__，该属性指向构造属性的原型对象。


#### New操作符做了什么
- 新建一个空对象
- 改变新对象的__proto__指向，继承构造函数原型对象的属性和方法
- 改变构造函数的this执行
- 返回新的对象

```javascript
Function.prototype.new1 = function(...rest){
    let constructor = this;
    let obj = Object.create(constructor.prototype);
    let res = constructor.apply(obj,rest);
    if(res && (typeof res === 'function' || typeof res === 'object')){
        return res
    }
    return obj
}
```

#### call 、apply、bind
```javascript 
Function.prototype.call2 = function(context,...rest){
    //获取构造函数 即this
    const constructor = this;
    //获取对象 即新的this指向
    if(context){
        context = context || window;
    }else {
        context = Object.cerate(null);
    }
    let fn = Symbal();
    context[fn] = constructor;
    context[fn](...rest); 
    delete context[fn]
}

Function.prototype.apply2 = function(context,rest){
     //获取构造函数 即this
    const constructor = this;
    //获取对象 即新的this指向
    if(context){
        context = context || window;
    }else {
        context = Object.cerate(null);
    }
    let fn = Symbal();
    context[fn] = constructor;
    context[fn](rest); 
    delete context[fn]
}

Function.prototype.bind2 = function(context,...rest){
    let constructor = this;
    return function(...arg){
         constructor.apply(context,[...rest,...arg])
    }
}

```

