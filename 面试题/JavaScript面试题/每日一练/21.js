/**
 * 给定任意二维数组，输出所有的排列组合项。比如 [['A','B', 'C'], ['a','b', 'c'], [1, 2]]，
 * 输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']
 */

function Cartesian(array) {
    let result = [];
    if(!array || array.length == 0) return 
    if(array.length == 1) return array[0]

	function loop(array1 = [], array2 = []) {
        let res = []
        if(array1.length > 0){
            if(array2.length > 0){
                for (let i = 0; i < array1.length; i++) {
                    const s = array1[i]
                    for (let j = 0; j < array2.length; j++) {
                        const s1 = array2[j]
                        res.push(s1 + s)
                    }
                }
            }else {
                return array1 
            }
        }else {
            return array2
        }
		
		return res
    }
    
    // let res = loop(array);
    // console.log(res)
    let tmp = [];
	for (let i = 0; i < array.length; i++) {
        const arr = array[i]
        result = loop(arr,tmp);
        console.log(result,'res')
        tmp = result;
    }
    console.log(result,'result')
    return result
}
// const array = [['a','b','c'],['d','e']]
Cartesian([['A','B', 'C'], ['a','b', 'c'], [1, 2]])