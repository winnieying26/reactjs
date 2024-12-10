const person ={
    firstName : "John",
    lastName : "Doe",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())

const person1 ={
    firstName : "Joe",
    lastName : "Smith",
}

const person2 ={
    firstName : "Mary",
    lastName : "Doe",
}

console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))

