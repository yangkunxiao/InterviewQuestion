let HunterUnion = {
    type:'hunter',
    topics:Object.create(null),
    publish:function(topic){
        if(!this.topics[topic]){
            return
        }else {
            this.topics[topic].forEach(item => {
                item()
            })
        }
    },
    subscribe:function(topic,fn){
        if(!this.topics[topic]){
            this.topics[topic] = []
        };
        this.topics[topic].push(fn)
    }
}

function Hunter(name,level){
    this.name = name;
    this.level = level;
    this.list = []
}

Hunter.prototype.publish = function(topic){
    console.log(this.level + '猎人:' + this.name + ',发布tiger任务!!!');
    HunterUnion.publish(topic);
}

Hunter.prototype.subscribe = function(topic,fn){
    console.log(this.level + '猎人:' + this.name + '订阅了' + topic);
    HunterUnion.subscribe(topic,fn);
}

let hudie = new Hunter('hudie','黄金');
let dida = new Hunter('dida','白银');
let kaka = new Hunter('kaka','王者');

kaka.subscribe('tigger',() => {
    console.log('hhh,我完成任务了!!!')
})

hudie.publish('tigger');


