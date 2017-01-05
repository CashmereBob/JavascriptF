declare var angular: any;

var mediaApp = angular.module('mediaApp', []);

mediaApp.controller('mediaAppController', function ($scope) {
    let mediaLib = new Media();
    var media = []
    var books = []

    $scope.AllMedia = function () {

        books.length = 0;
        media.length = 0;

        for (let book of mediaLib.GetBooks()) {
            media.push(book.Get());
        }

        for (let dvd of mediaLib.GetDvds()) {
            media.push(dvd.Get());
        }

        for (let game of mediaLib.GetGames()) {
            media.push(game.Get());
        }

        HideBookTable();

    }

    $scope.AllBooks = function () {
        books.length = 0;
        media.length = 0;
        for (let book of mediaLib.GetBooks()) {
            books.push(book.Get());
        }

        HideMediaTable();
    }

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
        } else {
            $scope.AllMedia();
        }
    }

    $scope.MediaArray = media;
    $scope.BookArray = books;

});