function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}


function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
//inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// use Magazine Constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Time", "Sam", "2024", "December");
console.log(mag1);
console.log(mag1.getSummary());
