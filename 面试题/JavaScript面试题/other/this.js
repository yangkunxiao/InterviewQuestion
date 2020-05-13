// m = 100;

// let obj = {
//     m : 10,
//     // test:() => {
//     //     console.log(this.m);
//     // }
//     test:function(){
//         console.log(this.m);
//         return function(){
//             console.log(this.m)
//         }
//     }
// }

// let fn = obj.test();//10

// fn();//100

// let t = obj.test;

// t()//100

/*------------------------------------------*/
this.a= 20;

function go(){
    console.log(this.a);
    this.a = 30
}

go.prototype.a = 40;

const test = {
    a:50,
    init:function(fn){
        fn();
        console.log(this.a,'aaaa');
        return fn
    }
}

console.log(new go().a);

test.init(go);

var p = test.init(go);

p()

/**
 * 第一次：new go().a --> 40 30
    test.init(go) 执行go 此时this --> window 打印20 然后改变a window.a = 30
        打印 50 
    test.init(p) 执行go 此时window.a=  30  打印 30 50 
    执行p 打印30
    
    
    40 30  20 50 30 50 30
 */