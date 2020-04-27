/**
 *
 * @param {Array} array 插入排序
 * 取出第一个元素，假设该元素已排好序
 * 取下一个元素，对已排序的数组元素进行遍历比较
 * 如果该元素（已排好序的元素）大于新元素，则将该元素移动到后一位
 * 重复上一步骤 直到等到已排序的元素小于等于新元素的位置 将新元素插入到该位置
 * 
 * 最佳情况：数组已排好序 时间复杂度 T(n) = O(n)
 * 最坏情况：时间复杂度 T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 */
function insertSort(array) {
	if (!Array.isArray(array)) {
		return
	}
	for (let i = 1, len = array.length; i < len; i++) {
		let key = array[i],//新元素
			j = i - 1;//代表已排好序的元素索引
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j]
			j--
		}
		array[j + 1] = key;//插入新元素
	}
	return array
}

const array = [1, 4, 2, 6, 9, 3, 1]
console.log(insertSort(array))
