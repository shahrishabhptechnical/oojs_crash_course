// Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate the Book
const book1 = new Book('Book1', 'Rishabh', 2019);
const book2 = new Book('Book2', 'Priyansh', 2019);
console.log(book2);