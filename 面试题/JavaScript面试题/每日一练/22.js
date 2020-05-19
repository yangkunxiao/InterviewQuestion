/* 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:
输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。
注意:

字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0,
        right = s.length - 1;

    while(left <= right ){
        if(s[left] !== s[right]){
            let str = s.split('');
            let strRight = s.split('');
            str.splice(left,1);
            strRight.splice(right,1);
            return str.join('') == str.reverse().join('') || strRight.join('') == strRight.reverse().join('')
        }
        left++;
        right--
    }
    return true
};

// console.log(validPalindrome('deeee'))


// var validPalindrome = function(s) {
//     let left = 0;
//     let right = s.length -1;

//     while(left < right){
//         if(s[left] !== s[right]){
//             let str = s.split("");
//             let strRight = s.split("");
//             str.splice(left,1)
//             strRight.splice(right,1)
//             console.log(str,strRight,'------')
//             return str.join("") === str.reverse().join("") || strRight.join("") === strRight.reverse().join("")
//         }
//         left++
//         right--
//     }
//     return true
// };


console.log(validPalindrome('deeeeda'))