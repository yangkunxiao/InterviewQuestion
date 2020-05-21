// /**
//  * JavaScript四种异步编程方式
//  * - 回调函数
//  *      - 优点：简单、容易理解、
//  *      - 缺点：代码高度耦合、流程混乱
//  * - 事件监听
//  * - 发布订阅
//  * - Promise
// */


// // 回调函数
// // function f1(callback) {
// //     setTimeout(() => {
// //         callback()
// //     },1000)
// // }

// // function f2(){
// //     console.log('f2')
// // }

// // f1(f2)


// //事件监听

// function Event(){
//     this.subs = new Map()
// }

// const wrap = (cb,once = false) => {
//     return {
//         callback:cb,
//         once
//     }
// }

// Event.prototype.$on = function(type,cb,once = false){
//     let subs = this.subs.get(type);
//     if(!subs){
//         this.subs.set(type,wrap(cb,once))
//     }else if(subs && typeof subs.callback == 'function'){
//         //只绑定一个回调
//         this.subs.set(type,[subs,wrap(cb,once)])
//     }else {
//         this.subs.set(type,[...subs,wrap(cb,once)])
//     }
// }

// Event.prototype.$off = function(type,cb){
//     let subs = this.subs.get(type);
//     if(!subs) return
//     this.subs.delete(type)
//     // if(typeof subs.callback == 'function'){
//     //     if(String(subs.callback) == String(cb)){
//     //         subs.delete(type)
//     //     }else {
//     //         return 
//     //     }
//     // }else {
//     //     for (let i = 0; i < subs.length; i++) {
//     //         const sub = subs[i];
//     //         if(String(sub.callback) == String(cb)){
//     //             subs.splice(i,1)
//     //             i--
//     //         }
//     //     }
//     //     if(subs.length == 0){
//     //         this.subs.delete(type)
//     //     }else if(this.subs.length == 1){
//     //         this.subs.set(type,this.subs[0])
//     //     }
//     // }
// }

// Event.prototype.$once = function(type,cb){
//     this.$on(type,cb,true)
// }

// Event.prototype.$emit = function(type,...rest){
//     let subs = this.subs.get(type);
//     let array = [];
//     if(!subs) return
//     if(typeof subs.callback == 'function'){
//         subs.callback.apply(this,rest)
//     }else {
//         for (let i = 0; i <subs.length; i++) {
//             array.push(subs[i])
//         }
//         for (let i = 0; i < array.length; i++) {
//             const item = array[i];
//             item.callback.apply(this,rest);
//             if(item.once){
//                 this.$off(type,item.callback)
//             }
//         }
//     }
// }



// let e2 = new Event();

// e2.$on('fn',function(){
//     console.log('e1')
// })

// e2.$once('fn',function(){
//     console.log('e12')
// },)

// e2.$on('fn',function(){
//     console.log('e123')
// })

// e2.$emit('fn',1,2)

// console.log(e2.subs)


//观察者模式
function EventEmitter(){
    this.handlers = new Map()
}

const wrap = (fn,once = false) => ({ callback:fn,once })

//订阅事件
EventEmitter.prototype.$on = function(type,fn,once = false){
    if(!this.handlers.has(type)) {
        this.handlers.set(type,wrap(fn,once))
        return
    };

    let handlers = this.handlers.get(type);

    if(Array.isArray(handlers)){
        this.handlers.set(type,[...handlers,wrap(fn,once)])
    }else {
        this.handlers.set(type,[handlers,wrap(fn,once)])
    }
}

//发布事件
EventEmitter.prototype.$emit = function(type,...rest){
    if(!this.handlers.has(type)) return;
    let handlers = this.handlers.get(type);

    if(Array.isArray(handlers)){
        for (let i = 0; i < handlers.length; i++) {
            const handler = handlers[i];
            handler.callback.apply(this,rest);
            if(handler.once){
                this.$off(type,handler.callback)
            }
        }
    }else {
        this.handlers.callback.apply(this,rest)
    }
}

//取消事件
EventEmitter.prototype.$off = function(type,fn){
    if(!this.handlers.has(type)) return;
    let handlers = this.handlers.get(type);
    let array = [];
    if(Array.isArray(handlers)){
        for (let i = 0; i < handlers.length; i++) {
            array.push(handlers[i])
        }
        for (let i = 0; i < handlers.length; i++) {
            const handler = handlers[i];
            if(String(handler.callback) == String(fn)){
                array.splice(i,1)
            }
        }
    }else {
        this.handlers.delete(type)
    }

    if(array.length == 0){
        this.handlers.delete(type)
    }else if(array.length == 1) {
        this.handlers.set(type,array[0])
    }

}

//once
EventEmitter.prototype.$once = function(type,fn){
    this.$on(type,fn,true)
}

let e2 = new EventEmitter();

e2.$on('fn',function(){
    console.log('e1')
})

// e2.$once('fn',function(){
//     console.log('e12')
// },)

e2.$on('fn',function(){
    console.log('e123')
},true)

e2.$emit('fn',1,2)

console.log(e2)