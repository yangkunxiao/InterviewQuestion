/* let node = {
		type: 'Identifier',
		name: 'foo',
	},
	type = 'Literal',
	name = 5
function outputInfo({ type,name } = { type:"1",name:'kaka' }) {
	console.log({ type,name })
}
outputInfo(({ type, name } = node))
console.log(type) // "Identifier" console.log(name);
 */

let node = {
	type: 'Identifier',
	name: 'foo',
	loc: {
        start: {
            line: 1,
            column: 1,
        },
        end: {
            line: 1,
            column: 4,
        },
    }
}


/* let { loc:{ start }  }=  node;

console.log(start)

let colors = [ "red" ,null];
let [ firstColor, secondColor = "green" ] = colors;
console.log(firstColor); // "red" 
console.log(secondColor); // "green" */


/* let colors = [ "red", [ "green", "lightgreen" ], "blue" ]; // 随后
let [ firstColor, secondColor  ] = colors;
console.log(firstColor); // "red" 
console.log(secondColor); // "green" */


// var colors = [ "red", "green", "blue" ]; 
// var clonedColors = colors.concat();
// colors.push(0)
// console.log(clonedColors);

let options = {
    // secure:true,
    // path:'/'
}
let { secure,path,domain,expires } = options

let uid = Symbol.for("uid"),
desc = uid + "";