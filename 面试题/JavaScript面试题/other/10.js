// let cp=require('child_process');
// let child=cp.fork('./child');
// child.on('message',function(msg){
//   console.log('got a message is',msg);
// });
// child.send('hello world');



// console.log(0)
// setTimeout(() => {
//     console.log(1)
// },1000) 
// setTimeout(() => {
//     console.log(2)
// },0) 
// console.log(3)

// //0 3 1 2

function fetchData(url,method="get"){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.send(null)
    xhr.onreadystatechange = function(){
        //监测接收数据ing
        if(xhr.status == 200 && xhr.readyState == 3){
            //todo
        }
    }
}