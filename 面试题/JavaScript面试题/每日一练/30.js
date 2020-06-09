/**
 * 和为s的连续的整数序列、
 * 输入一个正整数target，输出所有和为target的连续正整数序列（至少含有两个数）
 * 序列内的数字由小到大，不同序列按照首个数字的大小从小到大排序
 * 如target = 9
 * [[2,3,4],[4,5]]
 */

function findSumTarget(target, origin = 1) {
	let res = []
	let left = origin,
		right = target - 1
	while (left < right) {
		if (left > target - right) {
			right--
		} else if (right > target - left) {
			left++
		} else if ((target = left + right)) {
			res.push([left, right])
			if (left > 3) {
				let result = findSumTarget(left, right - 1);
                for (let i = 0,len = result.length; i < len; i++) {
                    res.push([...result[i],right])
                }
			} else if (right > 3) {
                let result = findSumTarget(right, left + 1)
                for (let i = 0,len = result.length; i < len; i++) {
                    res.push([left,...result[i]])
                }
			}
			left++
			right--
		}
	}
	return res
}

let res = findSumTarget(10)

console.log(res)
