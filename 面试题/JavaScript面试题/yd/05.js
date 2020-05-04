const value = {
    number:10
}

const multiply = (x = { ...value }) => {
    console.log(x.number *= 2)
}

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40


/**
 * 前两次执行，每次都会使用value初始化参数，number = 10.每次都是新创建一个对象，并不会对原有对象进行引用。所以结果打印都是20
 * 第三次执行是将value传进去，使用了value的引用，结果会对其产生影响，所以打印20之后，value.number = 20
 * 第四次执行时，仍是传入value，此时value.number = 20,故打印40
 */