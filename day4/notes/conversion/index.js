//type conversion = change the datatype of a value to another type
// (strings, numbers, booleans)
// very import when accept user inputs

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age);
console.log(typeof age)

let x = "Pizza";
let y ="Pizza";
let z = "Pizza";

x= Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let num = String(6);
//explict conversion
