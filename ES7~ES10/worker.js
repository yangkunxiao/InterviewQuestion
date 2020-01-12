onmessage = function(res) {
    // console.log(res.data);
    let intArrayBuffer = res.data;
    console.log('我已经进入休眠');
    Atomics.wait(intArrayBuffer, 0, 0);
    // Atomics.wait(intArrayBuffer, 0, 0, 2000);
    console.log('我已经醒了');
    console.log(Atomics.load(intArrayBuffer, 1));
    // intArrayBuffer[1] = 8888;
    Atomics.store(intArrayBuffer, 1, 8888)
    postMessage(intArrayBuffer)
}