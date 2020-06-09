//charCodeAt
// var text = "a";
// var txt = "✈️"

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


// var str = '1234abcd';

// console.log(str.indexOf('1'));
// console.log(str.includes('1'))
// console.log(str.startsWith('2'))
// console.log(str.endsWith('d'))

// console.log(str.repeat(2))

// indent 使用了一定数量的空格 
// var indent = " ".repeat(4),
// indentLevel = 0;
// // 每当你增加缩进
// var newIndent = indent.repeat(++indentLevel);

// console.log(newIndent)


//slice substr  substring
let str = 'helloworld';

//第一种情况
console.log(str.slice(1));//ellworld
console.log(str.substring(1));//ellworld
console.log(str.substr(1));//ellworld

//第二种情况：两个参数
//slice substring参数：第一个表示开始位置，第二个表示结束位置（不含）
//substr参数：第一个表示开始位置 第二个表示要截取的长度
console.log(str.slice(1,4));//ell
console.log(str.substring(1,4));//ell
console.log(str.substr(1,4));//ell0

//第三种：第一个参数大于第二个参数
//可以看出 substring会自动调动参数位置 
console.log(str.slice(5,1));//
console.log(str.substring(5,1));//ello
console.log(str.substr(5,1));//w

//第四种：第二个参数为负数
//可见，slice第二参数为负数时，是从尾部倒数来计算或者说是与字符串或数组的长度相加得出的结果来计算
//而substring, 无论第二参数是负多少，都只截取了第一个字符；
// 而slice直接返回空，slice的第一参数必须要小于等于第二参数才有效
console.log(str.slice(1,-1));//elloworld
console.log(str.substring(3,-1));//h
console.log(str.substr(1,-1));//








