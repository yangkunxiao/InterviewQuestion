/**
 * 请问变量a会被GC回收么，为什么呢?
 * 
 * 考察作用域链
 * 
 * 不会。因为JS进行编译（parse静态解析阶段）的时候，不知道eval中会有哪些东西，所以val会保存它的作用域。
 * 在parse阶段 如果用不到外部作用域的变量 就不会保存外部作用域 GC回收
 * 使用eval的时候 只有执行的时候才会确定是否会使用外部作用域
 * 此时：[[scope]]有三层：定义时产生[[scope]]
 * 0 ： local：函数自身的arguments 和 this组成，即函数的 AO
 * 1 ： 函数test的arguments 和 形参组成，即test的AO
 * 2 ： GO
 * 
 * 如果时window.eval() 则直接指向window。
 * 
 * 
 * 前端资源静态解析的时候：html css  js  图片
 * 解析最快的就是图片  最慢的就是js
 * 占用内存最大的也是图片 所以性能优化的时候  图片是一大难点
 */
function test() {
    var a = "yideng";
    return function() {
        console.log(0);

        // eval("console.log(a)"); //yideng
        // window.eval("console.log(a)") //a is not defined
    }
}
test()();