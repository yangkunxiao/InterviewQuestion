let number = 10;

const increaseNumber = () => number++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1)//10
console.log(num2)//10

//num++ 先返回number 再++