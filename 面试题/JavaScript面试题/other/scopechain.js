console.log(window.a,a);//undefined undefined
{
    console.log(window.a,a);//undefined function a(){}
    debugger   
    a = 10;
    function a() {};
    // a = 10;
    console.log(window.a,a); //function a(){}  10   / 此时 10  10 
};
console.log(window.a,a); //function a(){}  function a(){}


/**
 * 函数执行的时候：调用内部的[[call]]
 * new 的时候：调用内部的[[constructor]]
 * 箭头函数：内部没有[[constructor]] 所以无法new
 */