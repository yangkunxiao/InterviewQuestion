// alert(a);
// a();
// var a = 3;

// function a() {
//     alert(10)
// };
// alert(a);
// a = 6;
// a();

//还原
function a() {
    alert(10)
};
var a;

alert(a); //function 
a(); //10
a = 3;
alert(a); //3
a = 6;
a(); //a is not a function