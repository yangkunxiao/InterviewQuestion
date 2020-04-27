/**
 * 二分插入
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
 * 将新元素插入到该位置后；
 * 重复上述两步。
 * 
 * 
 * 最佳情况：T(n) = O(nlogn)
 * 最差情况：T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 */

function binaryInsertSort(array) {
	if (!Array.isArray(array)) {
		return
	}
	for (let i = 0, len = array.length; i < len; i++) {
		let key = array[i],
			left = 0,
			right = i - 1
		while (left <= right) {
			let mid = parseInt((left + right) / 2)
			if (key >= array[mid]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
		for (let j = i - 1; j >= left; j--) {
			array[j + 1] = array[j]
		}
		array[left] = key
    }
    return array
}

const array = [1,2,4,1,5,3,9,7];
console.log(binaryInsertSort(array))