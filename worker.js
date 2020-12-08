const { Worker, isMainThread, parentPort } = require('worker_threads');

// Listen for message from main thread
parentPort.once('message', (event) => {
    const sharedArray = event.data;
    const index = event.index;

    const arrValue = Atomics.load(sharedArray, index);
    const fibonaciValue = calculateFibonacci(arrValue);
    parentPort.postMessage(fibonaciValue);   

});




const calculateFibonacci = (num) => {
    var a = 1, b = 0, temp;

    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}