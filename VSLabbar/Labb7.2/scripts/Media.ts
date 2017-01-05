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

        this.AddBookToLibrary(new Book("Nora Roberts", "Förföljaren", "Deckare", "189", "9789100167332", "2016"));
        this.AddBookToLibrary(new Book("Trädens hemliga liv", "Trädens hemliga liv", "Djur & Natur", "204", "9789113073590", "2016"));
        this.AddBookToLibrary(new Book("Steve Krug", "Don't Make Me Think, Revisited", "IT", "332", "9780321965516", "2014"));

        this.AddDvdToLibrary(new Dvd("George Lucas", "Star Wars: The Complete Saga", "Science Fiction", "499", "2011012"));
        this.AddDvdToLibrary(new Dvd("Frank Darabont", "Nyckeln till frihet", "Crime", "250", "1749968"));
        this.AddDvdToLibrary(new Dvd("David Fincher", "Fight Club", "Drama", "199", "65428498"));

        this.AddGameToLibrary(new Game("Dice", "Battlefield 1", "Shooter", "375", "237631"));
        this.AddGameToLibrary(new Game("Blizzard North", "Diablo 2", "Action RPG", "369", "65184185"));
        this.AddGameToLibrary(new Game("Nintendo", "Zelda: Orcarina of Time", "Adventure", "243", "1556142318"));

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