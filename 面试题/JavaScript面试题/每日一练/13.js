/**
 * 字符串排列
 * 输入一个字符串， 打印字符串所有可能的排列顺序
 * 如输入：abc 输出：abc acb bac bca cab cba
 * 
 * 提示：回溯法
 */

 //第一种方法
let result = [] //输出的字符集
let stack = [];
function stringSort(str) {
	console.log('🍎输入的原始字符串: ', str)
	if (str.length <= 1) return str
	if (str.length == 2) {
		return [str, str[1] + str[0]]
	}
    if(stack.length == str.length){
        result.push(stack.join(''));
        return 
    }
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(stack.includes(element)){
            continue;
        }
        stack.push(element);
        stringSort(str);
        stack.pop();
    }
}

//第二种方法
function stringSort(str) {
	console.log('🍎输入的原始字符串: ', str)
	if (str.length <= 1) return str
	if (str.length == 2) {
		return [str, str[1] + str[0]]
	}
	let result = [] //输出的字符集
	let queue = str.split('')
	getStrArray(queue, result)
	result.sort()
	console.log('🍌输出的结果：', result)
    return [...new Set(result)]
    
}

function getStrArray(queue, result, current = '', temp = '') {
    current += temp
    //如果queue长度为0 则证明一轮遍历结束 
	if (queue.length == 0) {
		result.push(current)
		return
    }
    //循环遍历字符串
	for (let i = 0; i < queue.length; i++) {
        //取出第一位字符 改变queue的长度
        temp = queue.shift()
        //不断遍历的交换current 和 temp   来获取current
        getStrArray(queue, result, temp, current)
        //将取出的字符推入queue中，还原原字符串 ，改变字符串的位置
        queue.push(temp)
	}
}

const str = 'abcd'
stringSort(str)
