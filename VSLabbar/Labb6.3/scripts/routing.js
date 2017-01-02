var registryApp = angular.module('registryApp', ['ngRoute']);

registryApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partials/_home.html'
        })
        .when('/register', {
            templateUrl: '../partials/_register.html',
            controller: "registryAppController"
        })
        .when('/personRegister', {
            controller: 'registryAppController',
            templateUrl: '../partials/_personRegister.html'
        })
        .when('/done', {
            controller: 'registryAppController',
            templateUrl: '../partials/_done.html'
        })
})

registryApp.factory('registryAppFactory', function () {

    var persons = [{}];

    var seminar = {
        name: '',
        date: ''
    };


    var factory = {};

    factory.AddPerson = function (person) {
        persons.push(person);
    };

    factory.GetAllPersons = function () {
        return persons;
    };

    factory.SetSeminar = function (addSeminar) {
        seminar = addSeminar;
    };

    factory.GetSeminar = function () {
        return seminar;
    };

    return factory;
});


registryApp.controller("registryAppController", function($scope, $location, registryAppFactory) {
    $scope.AddPersons = function () {
        registryAppFactory.SetSeminar({ name: $scope.seminarName, date: $scope.seminarDate });
        $location.path('/personRegister');
    };

    $scope.registerMore = function () {
        registryAppFactory.AddPerson({ name: $scope.personName, phone: $scope.personPhone });
        $scope.personName = null;
        $scope.personPhone = null;
    };

    $scope.registerDone = function () {
        registryAppFactory.AddPerson({ name: $scope.personName, phone: $scope.personPhone });
        $location.path('/done');
    };

    $scope.RegisteredPersons = registryAppFactory.GetAllPersons();

    $scope.registeredSeminarName = registryAppFactory.GetSeminar().name;
    $scope.registededSeminarDate = registryAppFactory.GetSeminar().date;

});
