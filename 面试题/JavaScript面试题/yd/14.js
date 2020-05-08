/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组[3,4,5,1,2]为[1,2,3,4,5]的一个旋转，该数组的最小值为1。
 */

 /**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0,
        right = numbers.length - 1,
        mid;
    while(left < right){
        mid = Math.floor((left + right) / 2);
        if(numbers[mid] < numbers[right]){
            right = mid - 1; 
        }else if(numbers[mid] > numbers[left]){
            left = mid + 1;
        }else{
            right--
        }
    }
    console.log(left,right,numbers[left]);
    return numbers[left]
};

//  let array = [4,5,6,1,2,3];
//  let array = [2,2,2,0,1];
//  array = [2,3,4,5,3,4,5,6];
 

 minArray(array)