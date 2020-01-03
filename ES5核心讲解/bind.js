var fn = function() {

};

var bfn = fn.bind(null);

bfn.__proto__ === Function.prototype //true
Function.__proto__ === Function.prototype //true
Function.prototype.__proto__ === Object.prototype //true