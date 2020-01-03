this.a = 20;

function go() {
    console.log(this.a, 'a');
    this.a = 30;
}
go.prototype.a = 40;

var test = {
    a: 50,
    init: function(fn) {
        fn();
        console.log(this.a);
        return fn;
    }
};
console.log((new go()).a);
test.init(go);
var p = test.init(go);
p();

/**
 * new go() => 40 
 * (new go()).a => 30
 * test.init(go) => 20 50 => window.a = 30
 * var p = test.init(go) => 30 50
 * 30
 * 
 * 40 30 20 50 30 50 30
 */

/**
 * new go()的时候，JS引擎内部 =》 this = Object.create(go.prototype) ; go.call(this)
 * 
 */

// function fn(a) {
//     this.a = a;
//     this.drink = function(c) {
//         alert(c)
//     }
// }

// Function.prototype.new = function() {
//     let args = Array.prototype.slice.call(arguments);
//     let obj = Object.create({});
//     obj.__proto__ = this.prototype && Object.create(this.prototype);
//     let res = this.apply(obj, args);
//     if (res !== null && (typeof res === 'object' || typeof res === 'function')) {
//         return res;
//     }
//     return obj;
// }

// let s = fn.new(100);

// console.log(s.a);
// s.drink('beer')