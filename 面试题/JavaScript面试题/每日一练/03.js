//this指向谁
document.querySelector('button').onclick = function(){
    console.log(this)
}

/**
 * 答案：不确定
 * 1、如果用户手动点击按钮 this --> 按钮
 * 2、如果 let fn = document.querySelector('button').onclick this --> window
 * 3、如果 let a = { name:a,fn } this --> a
 */