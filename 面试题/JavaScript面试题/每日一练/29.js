//输入一个数组 调整数组 使得数组中奇数部分在数组的前半部分 偶数部分在后半部分

function sortArray(array){
    if(array.length <= 1) return array;
    let res = [];
    for (let i = 0,len = array.length; i < len; i++) {
        const num = array[i];
        console.log(num)
        if(num % 2 == 0) {
            res.push(num)
        }else {
            res.unshift(num)
        }
    }
    console.log(res)
    return res
}


sortArray([1,4,2,5,6,8,9,7]);