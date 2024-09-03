class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publication_Year = publicationYear;
    }

    bookDetails() {
        console.log(`The title of the book is "${this.title}" written by ${this.author} in ${this.publication_Year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publication_Year, bookPrice) {
        super(title, author, publication_Year);
        this.bookPrice = bookPrice;
    }

    bookDetails() {
        console.log(`The title of the book is "${this.title}" written by ${this.author} in ${this.publication_Year} and the price is ${this.bookPrice}`);
    }
}

const RichDad = new Ebook("RichDad & Poor Dad", "Robert Kiyosaki", 2007, '299$');
RichDad.bookDetails();

const HarryPotter = new Book("Harry Potter", "J.K. Rowling", 2000);
HarryPotter.bookDetails();
