/**
 * 冒泡排序
 * 依次比较相邻两个元素 如果第一个元素比第二个元素大 则交换
 * 这样一轮比较下来 最大的元素就位于数组末尾
 * 循环比较
 */

function bubbleSort(array) {
	if (!Array.isArray(array)) {
		return
	}
	for (let i = 0, len = array.length; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (array[i] > array[j]) {
				let tmp = array[i]
				array[i] = array[j]
				array[j] = tmp
			}
		}
	}
	return array
}

const array = [1, 2, 4, 1, 5, 3, 9, 7]
console.log(bubbleSort(array))
