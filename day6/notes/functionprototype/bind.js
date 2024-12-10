const obj = {name: "Chris"}

let greeting = function(a, b){
return `${a} ${this.name}.${b}`
}

let bound = greeting.bind(obj);
console.log(bound(obj, ["Hello", "How are you?"]))