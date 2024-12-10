/*const s1 = "Hello";
console.log(typeof s1)
console.log(s1.toLocaleUpperCase())

const s2 = new String("Hello");
console.log(typeof s2)
*/

//console.log(window);

//alert(1)

//console.log(navigator.

//object literal
const book1 = {
    title: "book 1",
    author: "Jane",
    year: "2024",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title: "book 1",
    author: "Joe",
    year: "2024",
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


console.log(book1);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.getSummary());