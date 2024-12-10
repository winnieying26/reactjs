//Constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// instantiate an object
const book1 = new Book("Book 1", "Jane","2024" );
const book2 = new Book("Book 2", "Joe","2022" );
console.log(book1);
console.log(book2.getSummary());