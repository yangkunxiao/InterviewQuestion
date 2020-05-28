//Generator
/* function* gen (x){
    let y = yield x + 1;
    return y
}

let g  = gen(3);
let res = g.next()
console.log(res) */

/* function* gen2(){
    return 2
}


let f2 = gen2()

console.log(f2.next()) */

//利用generator函数实现数组扁平化
var arr = [1, 2, [3, 4, 5, [6, 7]]]

function* flat(array) {
	let len = array.length
	for (let i = 0; i < len; i++) {
		const item = array[i]
		if (typeof item !== 'number') {
			yield* flat(item)
		} else {
			yield item
		}
	}
}

//数组扁平化
/* function flat(array){
    let res = [];
    for (const item of array) {
        if(Array.isArray(item)){
            res.push(...flat(item))
        }else {
            res.push(item)
        }
    }
    return res
}
function flat(array){
    return array.flat(Infinity)
}


console.log(flat(arr))

for (const item of flat(arr)) {
    console.log(item)
} */
/* 
function* func(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


 */

/* function* gen(x) {
    var y = yield x + 2
    console.log(y)
	return y
}

var g = gen(1)
g.next() // { value: 3, done: false }
// g.next(2) // { value: 2, done: true } */

function spawn(genF) {
	return new Promise(function (resolve, reject) {
		var gen = genF()
		function step(nextF) {
			try {
				var next = nextF()
			} catch (e) {
				return reject(e)
			}
			if (next.done) {
				return resolve(next.value)
			}
			Promise.resolve(next.value).then(
				function (v) {
					step(function () {
						return gen.next(v)
					})
				},
				function (e) {
					step(function () {
						return gen.throw(e)
					})
				}
			)
		}
		step(function () {
			return gen.next(undefined)
		})
	})
}
