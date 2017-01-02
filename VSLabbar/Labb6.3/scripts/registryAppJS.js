registryApp.factory('registryAppFactory', function () {

    var persons = [{}];

    var seminar = {
        name: '',
        date: ''
    };


    var factory = {};

    factory.AddPerson = function (person) {
        presons.push(person);
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

var controllers = {};

controllers.registryAppController = function ($scope, $location) {
    $scope.addPersons = function () {
        registryAppFactory.addSeminar({ name: $scope.seminarName, date: $scope.seminarDate });
        $location.path('/personRegister');
    };

    $scope.registerMore = function () {
        registryAppFactory.addPerson({ name: $scope.personName, phone: $scope.personPhone });
        $location.path('/personRegister');
    };

    $scope.registerDone = function () {
        registryAppFactory.addPerson({ name: $scope.personName, phone: $scope.personPhone });
        $location.path('/done');
    };

    $scope.persons = registryAppFactory.GetAllPersons();

    $scope.registeredSeminarName = registryAppFactory.GetSeminar().name;
    $scope.registeredSeminarDate = registryAppFactory.GetSeminar().date;
    $scope.seminarName = "hej";



};

registryApp.controller(controllers);
