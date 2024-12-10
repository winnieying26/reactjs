function printMe() {
  console.log("Printing...");
}
console.log(printMe);
printMe();

function printThis(param) {
  console.log(param);
}

printThis("I love you");

const count = 100; // expression

const printMeAgain = function () {
  console.log("Print");
};
function x(){
}
let p = x();  
 // p equals the value the function x() return if return nothing it will be undefined

 function sum(a, b){
    return a + b;
 }
console.log(sum(2, 3))

function calc(a, b=0){  // the default value of b is 0
    return 2*(a+b)
}
console.log(calc(3,4))
console.log(sum(2))


 function collectThings(x, ...y){ 
    // one rest parameter and it must be the last define for the function
   console.log(x)
   console.log(y)
 }

 console.log(collectThings(1,2,3,5,5,6))

 // arrow function is not binding to this keyword
 const add = (x, y) => {
    return x+y;
 }

 // const add = x => x;

 console.log(add(2, 3))

