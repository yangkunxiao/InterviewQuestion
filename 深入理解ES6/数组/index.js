let array = [,,,,1,2,3,];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(i,element);
// }

//foreach只遍历有效值
// array.forEach(item => {
//     console.log(item);
    
// })


//map只遍历有效值
// array.map(item => {
//     console.log(item);
    
// })

for (const key in array) {
    const element = array[key];
    console.log(key,element);
}