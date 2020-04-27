//EventEmitter
/**
 *  $on, $off, $on, $offAll
 */

function EventEmitter(){
    this.events = new Map()
}

const wrapCallBack = (fn,once = false) => ({ callback:fn,once })

EventEmitter.prototype.$on = function(type,fn,once = false){
    //从events获取事件类型为type的事件回调
    let handler = this.events.get(type);
    // console.log(handler)
    if(!handler){
        //如果不存在 则添加
        this.events.set(type,wrapCallBack(fn,once))
    }else if(handler && typeof handler.callback === 'function'){
        //如果只绑定一个回调
        this.events.set(type,[handler,wrapCallBack(fn,once)])
    }else {
        //绑定了多个回调
        this.events.set(type,[...handler,wrapCallBack(fn,once)])
    }
}

EventEmitter.prototype.$off = function(type,listener){
    let handler = this.events.get(type);
    if(!handler) return;
    if(!Array.isArray(handler)){
        if(String(handler.callback) === String(listener)){
            this.events.delete(type)
        }else {
            return
        }
    }else{
        for (let i = 0; i < handler.length; i++) {
            const item = handler[i];
            if(String(item.callback) === String(listener)){
                handler.splice(i,1);
                i--;
            }
        }
        if(handler.length === 0){
            this.events.delete(type)
        }else if(handler.length === 1){
            this.events.set(type, handler[0]);
        }
    }

}

EventEmitter.prototype.$once = function(type,fn){
    this.$on(type,fn,true)
}

EventEmitter.prototype.emit = function(type,...args){
    let handler = this.events.get(type),
        eventsArray = [];
    if(Array.isArray(handler)){
        //简单实现 优化：可以写-深拷贝
        for (let i = 0; i < handler.length; i++) {
            eventsArray.push(handler[i])
        }
        for (let i = 0; i < eventsArray.length; i++) {
            const item = eventsArray[i];
            item.callback.apply(this,args);
            if(item.once){
                this.$off(type,item.callback)
            }
        }
    }else {
        handler.callback.apply(this,args)
    }
    return true
}

EventEmitter.prototype.$offAll = function(type){
    let handler = this.events.get(type);
    if(!handler) return 
    this.events.delete(type)
}

let ev = new EventEmitter();
ev.$on('fk',() => {
    console.log('我订阅类一个事件1')
},true)
ev.$on('fk',() => {
    console.log('我订阅类一个事件2')
})
ev.$on('fk1',() => {
    console.log('我订阅类一个事件3')
})

// ev.$off('fk',() => {
//     console.log('我订阅类一个事件3')
// })

ev.$offAll('fk');
// ev.emit('fk',1,2);

console.log(ev.events)