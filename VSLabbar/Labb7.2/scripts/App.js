var mediaApp = angular.module('mediaApp', []);
mediaApp.controller('mediaAppController', function ($scope) {
    var mediaLib = new Media();
    var media = [];
    var books = [];
    $scope.AllMedia = function () {
        books.length = 0;
        media.length = 0;
        for (var _i = 0, _a = mediaLib.GetBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            media.push(book.Get());
        }
        for (var _b = 0, _c = mediaLib.GetDvds(); _b < _c.length; _b++) {
            var dvd = _c[_b];
            media.push(dvd.Get());
        }
        for (var _d = 0, _e = mediaLib.GetGames(); _d < _e.length; _d++) {
            var game = _e[_d];
            media.push(game.Get());
        }
        HideBookTable();
    };
    $scope.AllBooks = function () {
        books.length = 0;
        media.length = 0;
        for (var _i = 0, _a = mediaLib.GetBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            books.push(book.Get());
        }
        HideMediaTable();
    };
    $scope.AddBook = function () {
        mediaLib.AddBookToLibrary(new Book($scope._author, $scope._name, $scope._category, $scope._price, $scope._articleNumber, $scope._year));
        $scope._author = null;
        $scope._name = null;
        $scope._category = null;
        $scope._price = null;
        $scope._articleNumber = null;
        $scope._year = null;
        if (books.length > media.length) {
            $scope.AllBooks();
        }
        else {
            $scope.AllMedia();
        }
    };
    $scope.MediaArray = media;
    $scope.BookArray = books;
});
//# sourceMappingURL=App.js.map