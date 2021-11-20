class Book{
    constructor(title, author, year, reserved){
        this.title = title;
        this.author = author;
        this.year = year;
        this.loan = false;
    }

    static ordernate(book){
        return book.sort((a, b) => a.year - b.year);
    }
    
    returnBook(){
        if (this.loan == false){
            console.log("The book is not loaned");
        }
        else{
            this.loan = false;
            console.log("The book has sucessed returned!");
        }
    }

    loanBook(){
        if (this.loan == true){
            console.log("The book is already loaned");
        }
        else{
            this.loan = true;
            console.log("The book has sucessed reserved!");
        }
    }
}

const book1 = new Book("livro1","autor1",2020);
const book2 = new Book("livro1","autor1",2019);
const book3 = new Book("livro1","autor1",2015);
//books = [book1, book2, book3];
//console.log(Book.ordernate(books));

