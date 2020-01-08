//iterator
Object.prototype[Symbol.iterator] = function() {
    next() {

        // var value = this.value;
        // if (value < this.stop) {
        //     this.value++;
        //     return { done: false, value: value };
        // }
        // return { done: true, value: undefined };
    }
}

let obj = {
    a: 10
}

for (const key of obj) {
    console.log(key, 'key')
}