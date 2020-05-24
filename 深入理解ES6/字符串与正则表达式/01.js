//charCodeAt
var text = "a";
var txt = "✈️"

// console.log(text.charAt(0))
// console.log(text.charCodeAt(0))
// console.log(text.codePointAt(0))

// console.log(txt.charAt(0))
// console.log(txt.length)
// console.log(txt.charCodeAt(0))
// console.log(txt.codePointAt(0))


// function is32Bit(str){
//     return str.codePointAt(0) > 0xFFFF
// }

// console.log(is32Bit(' '))
// console.log(is32Bit('a'))

//从unicode码点返回字符串

//es5 提供的fromCharCode方法用于从Unicode码点返回字符串，只能返回0xFFFF内的 超出的就会溢出
// console.log(String.fromCharCode(0x20107))
// //溢出 最高位被舍弃
// console.log(String.fromCharCode(0x0BB7))

// //es6提供的 fromCodePoint
// console.log(String.fromCodePoint(0x20BB7))

// var s = "🚀";
// console.log(s.length)
// console.log(s.charCodeAt(0))
// console.log(s.charCodeAt(1))

// console.log(s.codePointAt(0))
// console.log(s.codePointAt(1))


var str = '1234abcd';

// console.log(str.indexOf('1'));
// console.log(str.includes('1'))
// console.log(str.startsWith('2'))
// console.log(str.endsWith('d'))

// console.log(str.repeat(2))

// indent 使用了一定数量的空格 
var indent = " ".repeat(4),
indentLevel = 0;
// 每当你增加缩进
var newIndent = indent.repeat(++indentLevel);

console.log(newIndent)



