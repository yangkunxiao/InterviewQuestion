//贪婪匹配 非贪婪匹配

/* const reg = /\d+?/;
const str = '1234';
console.log(reg.exec(str)) */

//限定符
/* const reg = /kaka\b/;
const str = 'kaka kaka hello kaka';
console.log(reg.exec(str)); */

//选择
// const reg = /(hello|world)/;
// const str = 'hello world';
// console.log(reg.exec(str))

// const str = '2020-01-12';
// const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// const res = str.replace(reg, '$3-$2-$1')
// console.log(res)
// const reg = /(?:[0-9]{4})-(?:[0-9]{2})-(?:[0-9]{2})/;
// const res = str.replace(reg, '$3-$2-$1')
// console.log(res)

//正向先行断言
// const str = 'window98 window7 window8 window8.1 window10';
// const reg = /window(?=(7|8))/g;
// const res = str.match(reg);
// console.log(res);
// const s = '12345678'.replace(/\d{1,3}(?=(\d{3})+$)/g, function($1) {
//     console.log($1);
//     return $1 + ','
// });
// console.log(s)
console.log('12345678'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,'))

//负向先行断言
// const reg1 = /window(?!(7|8))/g;
// const res2 = str.match(reg1);
// console.log(res2);

//后行断言
// const str = 'hello123world';
// const reg = /(?<=\d)\D+/g;
// console.log(reg.exec(str))

//后行逆向断言
// const str = 'hello123world';
// const reg = /(?<!\d)\D+/g;
// console.log(reg.exec(str))