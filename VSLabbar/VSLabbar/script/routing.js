var fruitApp = angular.module('fruitApp', ['ngRoute']);

fruitApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: "<h2>Fruit Cake</h2><br>" +
                "<a href='#/Bannana'>Bannanna</a><br>" +
                "<a href='#/Pear'>Pear</a><br>" +
                "<a href='#/Apple'>Apple</a><br>" +
                "<a href='#/Pineapple'>Pineapple</a><br>" +
                "<a href='#/Peach'>Peach</a>"
        })
        .when('/Bannana', {
            template: '<h2>Bannana</h2>' +
                "<p>The bannana is yellow</p>" +
                "<a href='#/'>Home</a>"
        })
    .when('/Pear', {
        template: '<h2>Pear</h2>' +
            "<p>The pear is green</p>" +
            "<a href='#/'>Home</a>"
    })
    .when('/Apple', {
        template: '<h2>Apple</h2>' +
            "<p>The apple is red</p>" +
            "<a href='#/'>Home</a>"
    })
    .when('/Pineapple', {
        template: '<h2>Pineapple</h2>' +
            "<p>The pineapple is green and yellow</p>" +
            "<a href='#/'>Home</a>"
    })
        .when('/Peach', {
        template: '<h2>Peach</h2>' +
            "<p>The peach is peach</p>" +
            "<a href='#/'>Home</a>"
    })
});