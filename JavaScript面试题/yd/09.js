//箭头函数和普通函数
var a = 10;
function bar(){
    this.a = 20;
    this.obj = {
        a:30,
        b:20,
        foo:() => {
            console.log(this.a)//20
        },
        fo(){
            console.log(this.a)
        }
    }
}


let b = new bar();

b.obj.foo();//20
b.obj.fo();//30

(b.obj.fo,b.obj.fo)()//10
(b.obj.foo,b.obj.foo)()//20

let f = b.obj;
f.fo();//30

let f1 = b.obj.fo;
let f2 = b.obj.foo;

f1();//10
f2()//20