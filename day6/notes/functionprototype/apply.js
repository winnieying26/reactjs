const obj = {name: "Chris"}

let greeting = function(a, b){
return `${a} ${this.name}.${b}`
}
// apply method takes arguments as an array
console.log(greeting.apply(obj, ["Hello", "How are you?"]))

const numbers = [1, 2,3,4,5,6]
console.log(Math.max.apply(null, numbers));  // this = null
