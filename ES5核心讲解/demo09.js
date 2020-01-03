var length = 10;

function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};
yideng.method(fn, 1);

/**
 * 第一次执行fn的时候：this指向window，此时this.length = 10
 * 使用arguments[0]()执行fn的时候，此时，this指向arguments，此时this.length = arguments.length = 2
 * 
 */