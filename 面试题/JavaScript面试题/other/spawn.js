function spawn(genFn){
    return new Promise((resolve,reject) => {
        let gen = genFn();
        function step(nextF){
            
        }
        step(function(){return gen.next(undefined)})
    })
}