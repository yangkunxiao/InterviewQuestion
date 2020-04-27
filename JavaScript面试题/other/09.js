// let index = 0
// function Foo(){
//     index++;
//     this.id = index;
// }

const Foo = (function(){
    let index = 0;
    return function(){
        // this.id = index;
        // index++
        if(this instanceof Foo){
            index++
            this.id = index;
        }else {
            index++;
            return {
                id:index
            }
        }
    } 
})()

const a = new Foo();
const b = new Foo();
const c =  Foo();
const d =  Foo();

console.log(a);
console.log(b);
console.log(c);
console.log(d);