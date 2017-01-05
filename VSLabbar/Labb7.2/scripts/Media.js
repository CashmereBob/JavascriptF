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
