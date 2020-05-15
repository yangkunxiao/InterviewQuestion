/**
 * 运动范围
 * 地上有一个m * n的放个，从坐标 （0，0） 到坐标（m-1，n-1）  一个机器人从原点开始移动，
 * 它可以向上，向下 向左向右移动一格，不能移动到方格外，也不能进入坐标数字之和大于k的格子，如
 * k为18时，能进入（35，37），不能进入（35，38）
 * 请问机器人能够到达多少格子
 *
 * 提示：
 * 1 <= n m <= 100
 * 0 <= k <= 20
 */
/**
 * 
 * @param {number} n 横坐标
 * @param {number} m 纵坐标
 * @param {number} k 限制值
 */

function run(n = 0, m = 0,k = 0) {
    if(k == 0) return 1;
    let map = [];
    for (let x = 0; x < n; x++) {
        let sum1 = addSum(x);
        if(sum1 > k) continue;
       for (let y = 0; y < m; y++) {
           let sum2 = addSum(y);
           let sum = sum1 + sum2;
           if(sum2 > k || sum > k) continue
            map.push([x,y])
       }
    }
    console.log(map,map.length);
    return map
}

run(10,10,10)

function addSum(num){
    let sum = num.toString().split('').reduce((pre,cur) => {
        return Number(pre) + Number(cur)
    },0)
    return sum
}

