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

    var personsSearch = [];

    var factory = {};

    factory.Search = function(name) {
        personsSearch.length = 0;
        angular.forEach(persons, function(value, key){
            
            if (value.name.includes(name)){
                personsSearch.push(value);
            }
        });
    }; 

    factory.getSearch = function(){
        return personsSearch;
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
    $scope.searchResult = schoolFactory.getSearch();
    $scope.AddPerson = function(){
                schoolFactory.AddPersonToArray({name: $scope.newPersonName, utbildning:$scope.newPersonUtbildning, status: $scope.newPersonAktiv })
        };
        
    $scope.SearchPerson = function(){
      schoolFactory.Search($scope.searchPersonName);
      localStorage.setItem("search", $scope.searchPersonName);
    };
    
    $scope.GetLocaLStorage = function(){ 
        var string = localStorage.getItem("search");
        $scope.searchPersonName = string;
        schoolFactory.Search(string);
    };
};

App.controller(controllers);

