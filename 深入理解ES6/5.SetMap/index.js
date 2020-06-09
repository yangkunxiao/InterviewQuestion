//Set接受任何可迭代的对象作为参数
// let json = {
//     "name":"kaka",
//     "age":25,
//     "sex":"boy"
// }


let set = new Set('json')

let arr = [1,2,3,4];

//普通数组的foreach方法参数一次为：键值、键、数组本身
//而set的因为本身没有键，所以第一第二参数是一样的均为其值

arr.forEach(function(item,index){
    // console.log(item,index)
    console.log(this)
},{
    name:'kaka',
    age:25
})

set.forEach(function(item,index){
    // console.log(item,index)
    console.log(this)
},{
    name:'kaka',
    age:25
})

// console.log(set)

let array = [1,2,2,2,3,3,4,4,5];

let result = [...new Set(array)]

console.log(result)



/**************************** WeakSet *************************************/

//当对象引用消失之后，set内部引用仍然保留着，容易造成内存泄露。
// let set2 = new Set();

// let key = {};

// set2.add(key);

// key = null;

// console.log(set2.size);

// console.log([...set2][0])


// let  weakSet = new WeakSet();

// let key = {};

// weakSet.add(key);

// console.log(weakSet.has(key))

// key = null;

// console.log(weakSet.has(key))

let sets = new Set();

sets.add(true);

set.add(true);

console.log(sets.size)