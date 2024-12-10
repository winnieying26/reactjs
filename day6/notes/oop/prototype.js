function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}

//Revise/ Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

// instantiate an object
const book1 = new Book("Book 1", "Jane","2024" );
const book2 = new Book("Book 2", "Joe","2022" );
const book3 = new Book("Book 3", "John","2022" );

console.log(book1);
console.log(book1.getAge());
console.log(book1);
console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book3);
book3.revise(2024);
console.log(book3);