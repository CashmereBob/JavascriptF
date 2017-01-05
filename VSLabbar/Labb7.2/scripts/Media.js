var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function () {
    function Product(_name, _category, _price, _articleNumber) {
        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.articleNumber = _articleNumber;
    }
    return Product;
}());
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(_author, _name, _category, _price, _articleNumber, _year) {
        _super.call(this, _name, _category, _price, _articleNumber);
        this.author = _author;
        this.year = _year;
    }
    Book.prototype.Get = function () {
        return this;
    };
    return Book;
}(Product));
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(_director, _name, _category, _price, _articleNumber) {
        _super.call(this, _name, _category, _price, _articleNumber);
        this.director = _director;
    }
    Dvd.prototype.Get = function () {
        return this;
    };
    return Dvd;
}(Product));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(_developer, _name, _category, _price, _articleNumber) {
        _super.call(this, _name, _category, _price, _articleNumber);
        this.developer = _developer;
    }
    Game.prototype.Get = function () {
        return this;
    };
    return Game;
}(Product));
var Media = (function () {
    function Media() {
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
    Media.prototype.AddBookToLibrary = function (book) {
        this.books.push(book);
    };
    Media.prototype.AddDvdToLibrary = function (dvd) {
        this.dvds.push(dvd);
    };
    Media.prototype.AddGameToLibrary = function (game) {
        this.games.push(game);
    };
    Media.prototype.GetBooks = function () {
        return this.books;
    };
    Media.prototype.GetDvds = function () {
        return this.dvds;
    };
    Media.prototype.GetGames = function () {
        return this.games;
    };
    return Media;
}());
//# sourceMappingURL=Media.js.map