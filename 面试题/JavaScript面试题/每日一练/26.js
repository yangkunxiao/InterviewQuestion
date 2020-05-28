//使用两个栈完成队列的push 和 pop方法
/**
 * 栈的特性 ： 先进后出  队列：先进先出
 * 使用两个栈 一个负责进 一个负责出。
 *
 * 定义两个队列：inStack outStack
 * 入列：inStack
 * 出列：outStack
 * 如果outStack为空 则将inStack的数据导入outStack
 */

const CQueue = function () {
	this.inStack = []
	this.outStack = []
}

CQueue.prototype.appendTail = function (value) {
	this.inStack.push(value)
}

CQueue.prototype.deleteHead = function () {
	if (this.outStack.length) {
		return this.outStack.pop()
	} else {
		while (this.inStack.length) {
			this.outStack.push(this.inStack.pop)
		}
		return this.outStack.pop || -1
	}
}

//拓展 ：使用两个队列实现一个栈
const inn = function () {
	this.q1 = [];
	this.q2 = [];
}

inn.prototype.appendChild = function (value) {
    if(!this.q2.length){
        this.q1.push(value)
    }else if(!this.q1.length){
        this.q2.push(value)
    }else {
        this.q1.push(value)
    }
}

inn.prototype.deleteChild = function () {
    if(!this.q1.length){
        this.q1.push(this.q2.pop());
        return this.q1.unshift()
    }
    if(!this.q2.length){
        this.q2.push(this.q1.pop());
        return this.q2.unshift()
    }
}