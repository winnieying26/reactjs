setTimeout(() => {
    console.log("2000ms")
}, 2000);
//callback:
// the delay time is not to delay the execution of the code is the delay of push the task into task queue
// need to wait till the task queue is empty and then will start the execution

setTimeout(() => {
    console.log("100ms")
}, 100);

console.log("End of script");

//Promises:  microtask queue
/* 
.then(()=>{....})
.catch(()=>{....})
.finally(()=>{....})
*/
