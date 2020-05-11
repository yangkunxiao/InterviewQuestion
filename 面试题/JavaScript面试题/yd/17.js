/**
 * 数组统计
 * 数组中有一数字出现的次数超过数组长度的一半，请找出该数字
 */

function findOne(array) {
	let map = new Map(),
		result = array[0] //默认数组第一个出现次数最多
	for (let i = 0, len = array.length; i < len; i++) {
		const element = array[i]
		if (map.has(element)) {
			let count = Number(map.get(element)) + 1
			//避免出现[3,3,3,3,3,1]的情况 做多余的遍历
			if (count > len / 2) {
				result = element
				break
			}
			map.set(element, count)
		} else {
			map.set(element, 1)
		}
	}
	console.log('数组中出现次数最多的一个：', result)
	return result
}

const array = [1, 3, 3, 3, 3]

findOne(array)
