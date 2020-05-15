/**
 * 找出字符串中最长的不重复的子字符串
 */

function findStr(str) {
    if(!str)  return;
    let array = str.split('');
    let result = new Set();
    let max = {
        len: 0,
        maxstr:''
    };
	while (array.length > 0) {
        let res = loop(array);
        if(max.len <= res.len){
            result.add(JSON.stringify(res));
            max = res;
        }
        array.shift();
    }
    let res = [...result].map(item => {
        return JSON.parse(item)
    })
    console.log(res);
    return res
}


function loop(array){
    let set = new Set();
    for (const s of array) {
        if(set.has(s)){
            break
        }
        set.add(s)
    }
    return { len: set.size,maxstr: [...set].join('') }
}

const str = 'abcdefjcod'


findStr('1234567890qwer345')
findStr('abcdeca')
findStr('abcdcba')
findStr('aaaaaa')
