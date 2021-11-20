class Book{
    #title
    #author
    #year
    #loaned
    
    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#loaned = false;
    }

    static ordernate(book){
        return book.sort((a, b) => a.#year - b.#year);
    }
    
    get title(){
        return this.#title;
    }

    set title(name){
        this.#title = name;
    }

    get author(){
        return this.#author;
    }

    set author(name){
        this.#author = name;
    }
    get year(){
        return this.#year;
    }

    set year(name){
        this.#year = name;
    }



    returnBook(){
        if (this.#loaned == false){
            console.log("The book is not loaned");
        }
        else{
            this.#loaned = false;
            console.log("The book has sucessed returned!");
        }
    }

    loanBook(){
        if (this.#loaned == true){
            console.log("The book is already loaned");
        }
        else{
            this.#loaned = true;
            console.log("The book has sucessed reserved!");
        }
    }

    toJSON(){
        return {
            title : this.#title,
            author : this.#author,
            year : this.#year,
            loaned : this.#loaned
        }
    }


}

class HQ extends Book{
    #ilustrator

    constructor(title, author, year, ilustrator){
        super(title, author, year);
        this.ilustrator = ilustrator;
    }
    get ilustrator(){
        return this.#ilustrator;
    }

    set ilustrator(name){
        this.#ilustrator = name;
    }

    toJSON(){
        return {
            title : this.title,
            author : this.author,
            year : this.year,
            loaned : this.loaned,
            ilustrator: this.#ilustrator
        }
    }
}

const book1 = new Book("livro1","autor1",2020);
const book2 = new Book("livro1","autor1",2019);
const book3 = new Book("livro1","autor1",2015);
books = [book1, book2, book3];
//console.log(Book.ordernate(books.toJSON));
console.log(book1.toJSON());
const hq1 = new HQ("hq1", 2010, "ilustrador");
console.log(hq1.toJSON());