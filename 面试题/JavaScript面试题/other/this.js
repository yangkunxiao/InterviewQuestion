m = 100;

let obj = {
    m : 10,
    // test:() => {
    //     console.log(this.m);
    // }
    test:function(){
        console.log(this.m);
        return function(){
            console.log(this.m)
        }
    }
}

let fn = obj.test();//10

fn();//100

let t = obj.test;

t()//100