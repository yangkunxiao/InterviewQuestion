const num = parseInt('2 * 4',10)

console.log(num);//2

/**
 * parseInt()：参数一：target字符串  参数二： 执行需要解析的机制：16，10，8，2......
 *    解析第一个参数时，检查参数字符串中的字符是否合法，如果遇到无法解析的字符，立即停止解析
 * Number()：只要遇到无法解析的字符，直接返回NaN
 */