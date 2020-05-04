function Parent(){
    this.a = 1;
    this.b = 2;
    // const func = () => {
    //     console.log(this)
    // }
    // func()
    setTimeout(() => {
        console.log(this)
    })
}

let p = new Parent();

