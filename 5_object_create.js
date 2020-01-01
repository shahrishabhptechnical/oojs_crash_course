// Object of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`
    }
}

// Create Object
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'Honey' },
    year: { value: 1000 }
});
// book1.title = 'Book One';
// book1.author = 'Vidhi';
// book1.year = 1999;

console.log(book1);