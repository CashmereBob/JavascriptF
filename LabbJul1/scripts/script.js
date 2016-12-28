var App = angular.module("App", []);

App.factory("mediaFactory", function(){

    var users = [
        {
            name: "Janne",
            username: "MegaJanne2K16",
            password: "password"
        },
        {
            name: "Magnus",
            username: "MegaMagnus2K16",
            password: "password"
        },
        {
            name: "Conny",
            username: "MegaConny2K16",
            password: "password"
        },
        {
            name: "Lenny",
            username: "MegaLenny2K16",
            password: "password"
        },
        {
            name: "Roy",
            username: "MegaRoy2K16",
            password: "password"
        },
    ];

    var movies = [
        {
            title: "Nykeln till frihet",
            year: "1994"
        },
        {
            title: "Gudfadern",
            year: "1972"
        },
        {
            title: "The Dark Knight",
            year: "2008"
        },
        {
            title: "12 edsvurna män",
            year: "1957"
        },
        {
            title: "Shindler´s List",
            year: "1993"
        },
        {
            title: "Pulp Fiction",
            year: "1994"
        },
        {
            title: "Fight Club",
            year: "1999"
        },
        {
            title: "Forest Gump",
            year: "1994"
        },
        {
            title: "Gökboet",
            year: "1977"
        },
        {
            title: "Guds Stad",
            year: "2002"
        },
    ];

    var factory = {};

    factory.GetAllUsers = function(){
        return users;
    };

    factory.GetAllMovies = function(){
        return movies;
    };

    factory.GetLoggedInUser = function(){
        return sessionStorage.getItem("user");
    };

    return factory;

});

var controllers = {};

controllers.mediaLibraryController = function($scope, mediaFactory){
    $scope.AllMovies = mediaFactory.GetAllMovies();


};

App.controller(controllers);