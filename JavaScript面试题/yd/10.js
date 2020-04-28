//排序数组查找
function sortFind(array,target){
    if(array.length == 0) return 0;
    let result = 0,
        len = array.length - 1,
        isAsc = array[0] <= array[len] ;//true 升序 false 降序
    while(len > 0){
        if(target == array[len]){
            result++
        }
        if(isAsc){
            if(target > array[len]){
                break
            }
        }else {
            if(target < array[len]){
                break
            }
        }
        
        len--
    }
    
    return result;
}

const array = [1,2,3,4,5,6,6,6,6,6,7,7,7,8,9,10].reverse();

const target = 6;

const res = sortFind(array,target);

console.log(res,'res')