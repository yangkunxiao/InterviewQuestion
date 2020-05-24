/**
 * 输入一个递增的数组和一个数字s，在数组中查找两个数，使得他们的和整好为s，如果存在多个，则返回任意一组即可
 * 如数组[1,2,3] s = 3 输出 [1,2]
 */

function findChild(array,s) {
    if(array.length < 2) return ;
    // let res = [];
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if(array[i] + array[j] == s){
    //             res.push([array[i],array[j]])
    //             break
    //         }
    //     }
    // }
    // console.log(res);
    // return res[0]

    let left = 0,
        right = array.length - 1
        res = [];

    while(left < right){
        if(array[right] > s || array[right] > s - array[left]){
            right--
        }else if(array[left] < s - array[right]){
            left++
        }else if(array[left] == s - array[left] || array[right] == s - array[left]){
            res.push([array[left],array[right]])
            left++;
            right--;
        }
    }
    console.log(res)
    return res

}

let array = [1,2,3,4,5];
let s = 6

findChild(array,s)