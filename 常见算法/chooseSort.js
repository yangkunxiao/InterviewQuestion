/**
 * 选择排序
 * 先从未排序的队列选择一个最大或者最小的元素 放在已排序的起始位置
 * 然后在未排序的队列选择一个最大或者最小的元素 放在已排序的末尾位置
 * 
 * 最佳情况：T(n) = O(n2)
 * 最坏情况：T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 */
function chooseSort(array){
    if (!Array.isArray(array)) {
		return
    }
    for (let i = 0,len = array.length; i < len - 1; i++) {
        let min = array[i];
        for (let j = i + 1; j < len; j++) {
            if(min > array[j]){
                const tmp = min;
                min = array[j];
                array[j] = tmp;
            }
            
        }
        array[i] = min
    }
    return array
}

const array = [1,2,4,1,5,3,9,7];
console.log(chooseSort(array))