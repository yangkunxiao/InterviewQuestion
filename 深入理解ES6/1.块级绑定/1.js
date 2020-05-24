//var声明 和 变量提升

function getValue(condition) {
	if (condition) {
		var value = 'blue'
		return value
	} else {
		console.log(value)
        // value 在此处可访问，值为 undefined 
        return null;
	}
	// value 在此处可访问，值为 undefined
	console.log(value)
}
//value 此处不可访问
getValue(false)
console.log(value)//value is not define
