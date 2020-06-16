class Router {
    constructor(){
        //存储path和对应的回调函数
        this.routes = new Map();
        //存储history
        this.history = [];
        //存储当前hash指向 默认指向最后一个
        this.currentIndex = this.routes.size - 1;
        //存储当前hash
        this.currentUrl = '';
        //绑定当前方法的this指向
        this.refresh = this.refresh.bind(this);
        //监听页面load 和 hashchange事件
        window.addEventListener('load',this.refresh,false)
        window.addEventListener('hashchange',this.refresh,false)
    }
    route(path,callback){
        this.routes.set(path,callback || (() => {}));
        this.currentIndex = this.routes.size - 1;
        console.log(this.routes);
    }
    refresh(){
        let path = '#' + location.hash.slice(1) || '/';
        console.log(path,'path');
        
        let callback = this.routes.get(path) || (() => {});
        callback()
    }
}

let router = new Router();

router.route('#user',function(){
    console.log('user')
})

router.route('#about',function(){
    console.log('about')
})