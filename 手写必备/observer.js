class Hunter {
    constructor(name,level){
        this.name = name;//姓名
        this.level = level;//等级
        this.list = []//任务列表
    }
}
Hunter.prototype.publish = function(){
    console.log(this.name + '发布了任务!!!')
    this.list.forEach(item => {
        item()
    })
}

Hunter.prototype.subscribe = function(target,fn){
    console.log(`${this.name}接了${target.name}的任务!!!`)
    target.list.push(fn)
}

let hudie = new Hunter('hudie','黄金');
let dida = new Hunter('dida','白银');
let kaka = new Hunter('kaka','王者');

kaka.subscribe(hudie,() => {
    console.log('hhh,我完成任务了!!!')
})

hudie.publish('tigger');

