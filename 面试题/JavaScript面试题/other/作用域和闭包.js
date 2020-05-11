// function test(){
//     if(false){
//         var i = 10; //undefined
//         // i = 10//refenerceError
//     }
//     console.log(i)
// }

// test()

// console.log(i)



function test(obj){
    obj.name = 'kaka';
}

obj = {
    name : 'hudie'
}

test(obj)