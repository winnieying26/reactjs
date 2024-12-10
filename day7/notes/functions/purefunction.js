// a function always returns the same output with the same input
function sayGreeting(name) {
  return `Hello ${name}`;
}

console.log(sayGreeting("Ying"));

let greeting = "Hi";

function sayHi(name){
    return `${greeting} ${name}`
}
console.log(sayHi("Ying"))
greeting = "Hello";
console.log(sayHi("Ying"))  // side effect 
