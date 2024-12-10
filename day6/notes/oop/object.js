// Object of photos

const bookPhotos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

const book1 = Object.create(bookPhotos);
 book1.title = "Book 1";
 book1.author = "Jane";
 book1.year = "2020";


 const book2 = Object.create(bookPhotos, {
    title: {value: "Book2"},
    author: {value: "Joe"},
    year:{value: "2023"}
 })

 console.log(book1)
 console.log(book2)