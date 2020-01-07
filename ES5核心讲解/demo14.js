{
    var a = 1;
    const b = 2;
    // test = 3;
    function test() {}
    test = 3;
    console.log(typeof test) //number
}
console.log(a); //1
console.log(typeof test); //function
console.log(b); //b is not defined