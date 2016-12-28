var App = angular.module("App", []);

App.factory("mediaFactory", function($q){

    var users = [
        {
            name: "Janne",
            username: "user",
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

    factory.GetAllMovies = function(){
        return movies;
    };

    factory.ValidateLogin = function(username, password) {
        var q = $q.defer();
        var user = {};
        angular.forEach(users, function(value, key){
            if (value.username == username && value.password == password){
                user = value;
            };
        });

        if (angular.equals(user, {})){
            q.reject('The combination of user and password did not match. Please try again!');
        } else {
            q.resolve(user.name);
        }
        
        return q.promise;

    };

    factory.GetRememberdUser = function() {
        var q = $q.defer();
        var user = {};
        angular.forEach(users, function(value, key){
            if (value.username == localStorage.rememberUser){
                user = value;
            }
        });
        
        if(angular.equals(user, {})){
            q.reject();
        } else {
            q.resolve(user);
        };

        return q.promise;
    };


    return factory;

});

var controllers = {};

controllers.mediaLibraryController = function($scope, $q, $location, mediaFactory){
    $scope.AllMovies = mediaFactory.GetAllMovies();
    $scope.Login = function() {

    mediaFactory.ValidateLogin($scope.loginUsername, $scope.loginPassword).then(
        function(username){
            sessionStorage.removeItem('user');
            sessionStorage.user = username;

            if($scope.loginRemember){
                localStorage.rememberUser = $scope.loginUsername;
            } else {
                localStorage.removeItem('rememberUser');
            }

            window.location.href = 'library.html';
        }, 
        function(error){
            $scope.error = error;
        });
    };

    $scope.LoggedIn = function(){
        $scope.user = sessionStorage.user;
    };

    $scope.StoredUser = function() {
        mediaFactory.GetRememberdUser().then(function(user){
            $scope.loginUsername = user.username;
            $scope.loginPassword = user.password;
            $scope.loginRemember = true;
        }, function(){
            console.log("failed fetching rememberd user!");
        });

    };

};

App.controller(controllers);

