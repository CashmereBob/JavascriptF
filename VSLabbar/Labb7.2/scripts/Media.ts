class Product {
    name: string
    category: string
    price: string
    articleNumber: string

    constructor(_name: string, _category: string, _price: string, _articleNumber: string) {
        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.articleNumber = _articleNumber;
    }

}

class Book extends Product {
    author: string
    year: string

    constructor(_author: string, _name: string, _category: string, _price: string, _articleNumber: string, _year:string) {
        super(_name, _category, _price, _articleNumber);
        this.author = _author;
        this.year = _year;
    }

    Get(): Book {
        return this;
    }
}

class Dvd extends Product {
    director: string

    constructor(_director: string, _name: string, _category: string, _price: string, _articleNumber: string) {
        super(_name, _category, _price, _articleNumber);
        this.director = _director;
    }

    Get() : Dvd {
        return this;
    }
}

class Game extends Product {
    developer: string

    constructor(_developer: string, _name: string, _category: string, _price: string, _articleNumber: string) {
        super(_name, _category, _price, _articleNumber);
        this.developer = _developer;
    }

    Get(): Game {
        return this;
    }
}

class Media {
    books: Book[]
    dvds: Dvd[]
    games: Game[]

    constructor() {

        this.books = [];
        this.dvds = [];
        this.games = [];

        this.AddBookToLibrary(new Book("Forfattare1", "Boktitel1", "Bokkategori1", "100", "B1", "2001"));
        this.AddBookToLibrary(new Book("Forfattare2", "Boktitel2", "Bokkategori2", "200", "B2", "2002"));
        this.AddBookToLibrary(new Book("Forfattare3", "Boktitel3", "Bokkategori3", "300", "B3", "2003"));

        this.AddDvdToLibrary(new Dvd("Regisör1", "Filmtitel1", "Filmkategori1", "100", "D1"));
        this.AddDvdToLibrary(new Dvd("Regisör2", "Filmtitel2", "Filmkategori2", "200", "D2"));
        this.AddDvdToLibrary(new Dvd("Regisör3", "Filmtitel3", "Filmkategori3", "300", "D3"));

        this.AddGameToLibrary(new Game("Utvecklare1", "Speltitel1", "Spelkategori1", "100", "D1"));
        this.AddGameToLibrary(new Game("Utvecklare2", "Speltitel2", "Spelkategori2", "200", "D2"));
        this.AddGameToLibrary(new Game("Utvecklare3", "Speltitel3", "Spelkategori3", "300", "D3"));

    }

    AddBookToLibrary(book: Book) {
        this.books.push(book);
    }

    AddDvdToLibrary(dvd: Dvd) {
        this.dvds.push(dvd);
    }

    AddGameToLibrary(game: Game) {
        this.games.push(game);
    }

    GetBooks(): Book[] {
        return this.books;
    }

    GetDvds(): Dvd[] {
        return this.dvds;
    }

    GetGames(): Game[] {
        return this.games;
    }
}