var App = angular.module("App", []);

//Angular Factory

App.factory("schoolFactory", function(){

    var utbildningar = [    
    {
        name: "EC"
    },
    {
        name: "Ingenjör"
    },
    {
        name: "Ekonom"
    },
    {
        name: "Läkare"
    },
    {
        name: "Djurskötare"
    },

    ];

    var persons = [
        {
            name: "Klara",
            status: false,
            utbildning: "EC"
        },
        {
            name: "Markus",
            status: true,
            utbildning: "EC"
        },
        {
            name: "Lea",
            status: true,
            utbildning: "EC"
        },
        {
            name: "Oskar",
            status: false,
            utbildning: "Ingenjör"
        },
        {
            name: "Lovis",
            status: true,
            utbildning: "Ingenjör"
        },
        {
            name: "Odin",
            status: true,
            utbildning: "Ingenjör"
        },
        {
            name: "Emilia",
            status: false,
            utbildning: "Ekonom"
        },
        {
            name: "Izak",
            status: true,
            utbildning: "Ekonom"
        },
        {
            name: "Signe",
            status: true,
            utbildning: "Ekonom"
        },
        {
            name: "Damien",
            status: false,
            utbildning: "Läkare"
        },
        {
            name: "Janni",
            status: true,
            utbildning: "Läkare"
        },
        {
            name: "Andy",
            status: true,
            utbildning: "Läkare"
        },
        {
            name: "Ann",
            status: false,
            utbildning: "Djurskötare"
        },
        {
            name: "Fredrik",
            status: true,
            utbildning: "Djurskötare"
        },
        {
            name: "Dorotea",
            status: true,
            utbildning: "Djurskötare"
        },

        

    ]

    var factory = {};

    factory.CheckStudent = function (name){
        var dfd = $.Deferred();
        var bool = true;

        $.each(persons, function(key, value){
            if (value.name == name){
                bool = false;
            }
        });

        if (bool){
            dfd.resolve();
        } else {
            dfd.reject();
        }

        return dfd.promise();
    };


    factory.getPersons = function(){
        return persons;
    };

        factory.getUtbildningar = function(){
        return utbildningar;
    };

    factory.AddPersonToArray = function(person){
                persons.push(person);
    };

    return factory;
});

var controllers = {};

controllers.schoolController = function($scope, schoolFactory){
    $scope.utbildningar = schoolFactory.getUtbildningar();
    $scope.persons = schoolFactory.getPersons();
    $scope.AddPerson = function(){
        schoolFactory.CheckStudent($scope.newPersonName).then(
            function(){
                schoolFactory.AddPersonToArray({name: $scope.newPersonName, utbildning:$scope.newPersonUtbildning, status: $scope.newPersonAktiv })
                $('#error').html("Studenten inlagd").css('color', 'green');
            },
            function(){
                $('#error').html("Studenten finns redan").css('color', 'red');
            }
        )};
};

App.controller(controllers);