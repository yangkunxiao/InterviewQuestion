const worker = new Worker('./worker.js');
//创建缓冲区
let arrayBuffer = new SharedArrayBuffer(1024);

//创建视图
const intArrayBuffer = new Int32Array(arrayBuffer);

for (let i = 0; i < intArrayBuffer.length; i++) {
    intArrayBuffer[i] = i
}

worker.postMessage(intArrayBuffer);

setTimeout(() => {
    Atomics.wake(intArrayBuffer, 0, 1)
}, 3000)

worker.onmessage = function(res) {
    console.log(Atomics.load(intArrayBuffer, 1))
}