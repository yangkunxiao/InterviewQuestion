//spawn
function spawn(func) {
    let gen = func();
    return new Promise((resolve,reject) => {
        function step(nextF){
            let next;
            try {
                next = nextF();
            } catch (error) {
                return reject(error)
            }
            if(next.done){
                return resolve(next.value)
            }
            Promise.resolve(next.value).then(function(v) {
                step(function(){
                    return gen.next(v)
                })
            },function(e){
                step(function(){
                    return gen.throw(e)
                })
            })
        }
        step(function(){
            return gen.next(undefined);
        })
    })
}

