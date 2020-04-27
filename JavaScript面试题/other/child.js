process.on('message',function(msg) {
    console.log(msg);
    process.send('hello kaka')
})