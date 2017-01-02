var fruitApp = angular.module('fruitApp', ['ngRoute']);

fruitApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partial/_home.html' 
        })
        .when('/Bannana', {
            templateUrl: '../partial/_bannana.html'
        })
    .when('/Pear', {
        templateUrl: '../partial/_pear.html'
    })
    .when('/Apple', {
        templateUrl: '../partial/_apple.html'
    })
    .when('/Pineapple', {
        templateUrl: '../partial/_pineapple.html'
    })
        .when('/Peach', {
        templateUrl: '../partial/_peach.html'
    })
});