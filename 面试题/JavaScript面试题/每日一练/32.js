//1234567890 => 1,234,567,890
const formatCode = (str) => {
    if(str.length <= 3) return str;
    //第一种方法
    // let arrayStr = str.split('');
    let res = '';
    // let count = 0;
    // while(arrayStr.length > 0){
    //     if(count > 0 && count % 3 == 0){
    //         res += ',' + arrayStr.pop()
    //     }else {
    //         res += arrayStr.pop()
    //     }
    //     count++
    // }

    //第二种方法
    // str.split('').reverse().reduce(function(pre,cur,index){
    //     res = res + ( ( index > 0 && index % 3 == 0) ? (',' + cur) : cur)
    // },'')

    // return res.split('').reverse().join('')


    // //第三种
    // return Number(str).toLocaleString('en-US')


    //第四种
    return new Intl.NumberFormat().format(str)
}

const result = formatCode('1234567890');

console.log(result)