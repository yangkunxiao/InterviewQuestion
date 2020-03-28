//数组扁平化

//1、es6的flat方法.接受参数表示拉伸的等级，未知等级可以使用Infinity
function flat1(array) {
	return array.flat(Infinity)
}
//2、replace + split/JSON.parse
function flat2(array) {
	let str = JSON.stringify(array)
	let str2 = str.replace(/\[|\]/g, '')
	// let str3 = '[' + str2 + ']';
	// let res = JSON.parse(str3);
	let res = str2.split(',')
	return res
}

//3、递归
let res = []
function flat3(array) {
	array.forEach(item => {
		if (Array.isArray(item)) {
			flat3(item)
		} else {
			res.push(item)
		}
	})
}

//4、reduce
function flat4(array) {
	return array.reduce((pre, current, array) => {
		return pre.concat(Array.isArray(current) ? flat4(current) : current)
	}, [])
}

//5、concat
function flat5(array){
    let res = [];
    while(array.some(item => Array.isArray(item))){
        array = res.concat(...array)
    }
    return array
}

let array = [1, 2, [4, 3, [4, [5, 6]], 7], 8]
// flat3(array)
// console.log(res)
console.log(flat1(array))
console.log(flat2(array))
console.log(flat4(array))
console.log(flat5(array))
