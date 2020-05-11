/**
 * 掷骰子
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。
 * 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1:

输入: 1
//1 2 3 4 5 6
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
示例 2:

输入: 2
//2 3 4 5 6 7 8 9 10 11 12
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]

 */

 /**
 * @param {number} n
 * @return {number[]}
 * 递归遍历，使用hash值存放每一个可能出现的值的次数
 */
var twoSum = function(n) {
    let map = new Map();//key ： 
    const totalCount = Math.pow(6,n);
    func(0,1);

    const res = [];

    for (const times of map.values()) {
        res.push(times / totalCount)
    }

    console.log(res)
    return res
    /**
     * 从最后一个骰子开始，求出每一个数字出现的次数
    */
    function func(total,step){//0 1
        if(step > n){//n = 2
            map.set(total,map.get(total) ? map.get(total) + 1 : 1);
            return 
        }
        //每个骰子有六个可能、走六次 
        for (let i = 0; i < 6; i++) {
            /**
             * 1: 0,2
             */
            func(total + i,step + 1)
        }
    }
    
};


/**
 * 使用动态规划 
 */

twoSum(1)