let num = 7; 
let newNum= 7.89;

console.log(typeof newNum);

let favFood = "Pizza"; // string text value, a word or a paragraph
let favColor = "Green";

console.log(1>100);




/** Primitives: Number, String, Boolean, BigInt, Symbol, Undefined, Null/ holds single simple data values
 * Non-Primitives: Object(arrays, functions and objects) store multiple or more complex values
 * 
 */

console.log(js === "cool");
let bigNumber = 900008298373653749747n; 
// finish with n
console.log(typeof bigNumber);

let channelName;
console.log(typeof channelName); // undefined
//null => empty

let myList = ["Apple", true, 7, "abc"];
console.log(myList);
console.log(myList[0]);

function sum(a, b){
    return a+b;
  }
  
  let hello1= function hello1(){
    console.log("Hello from the other side")
  }
  console.log(sum(2, 3));
  hello1()

  let character = {
    name: "BMW",
    color: "blue",
    year: 2024
  }
  
  let favDrink = "Lemon Water";
  let favNum = 26;

  function myFavs(){
    console.log(favDrink, favNum);
  }

  myFavs();

  let person = {
    name: "John",
    age: 30
  }
