// var  a = undefined 
// everything create with var will be hoisted the initialization of the variable the initial value is undefined
console.log(`sumFunc(1,2)=>${sumFunc(1,2)}`);
console.log(`sumConst(3,4)=>${sumConst(3,4)}`);

function sumFunc(a,b){
    return a + b 
}
const sumConst =(a,b) => a + b;

// let and const are better way of defining variable and get rid of a lot of problem like hoisting

/** JIT just in time
 * javascript declaration :  var a (hoisted to the top)
 * javascript initialization:  var a = 12
 * Function declaration are fully hoisted, so you can call the function before its declaration.
 * function expression to stop hoisting
 * Always declare variables at the top of their scope:
 * Use let and const instead of var:
var can lead to bugs due to being hoisted and initialized as undefined.
Declare functions before using them:
Avoid relying on hoisting:
 */