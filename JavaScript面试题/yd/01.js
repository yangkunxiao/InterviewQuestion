var x = 20;
var temp = {
    x:40,
    foo:function(){
        var x = 10;
        console.log(this.x)
    }
}

(temp.foo,temp.foo)()//20