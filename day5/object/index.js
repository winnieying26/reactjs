// a collection of related properties and /or methods, can represent real world objects 
/* object = {
key: value,
function()
}
*/ 

const person1 = {
    firstName: "Bob",
    lastName: "Smith",
    age: 34,
    isStudent:false,
    sayHi(){
        console.log("Hi")
    },
    sayBye(){
        console.log("Bye!")
    }
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);
person1.sayBye();

console.log(0.1 + 0.2 == 0.3);