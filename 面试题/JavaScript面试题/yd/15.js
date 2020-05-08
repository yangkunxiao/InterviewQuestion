/**
 * 替换空格
 * we are family --> we%20are%20family
 * 不允许使用正则 内置函数
 */

function replaceEmptySpace(str) {
	let res = '';
    // let flag = true;//标杆变量 默认没有碰到空格

    for (const item of str) {
        if(item == ' '){
            res += '%20'
        }else {
            res += item
        }
		// if (item == ' ') {
        //     flag = false
        //     res += '%20'
		// 	continue
        // }else {
        //     if(!flag){
        //         flag = true;
        //         res += '%20'
        //     }
        // }

        // if(flag){
        //     res += item;
        // }
	}
	console.log(res)
	return res
}

const str = 'we are family';
// const str = '       ';

replaceEmptySpace(str)
