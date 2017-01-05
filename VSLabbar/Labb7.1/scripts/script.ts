declare var angular: any;
var valutaApp = angular.module('valutaApp', []);

valutaApp.controller('valutaAppController', function ($scope) {
    $scope.sekCalc = function () {
        $scope.eurField = ConvertSekToEur($scope.sekField);
    }
    $scope.eurCalc = function () {
        $scope.sekField = ConvertEurToSek($scope.eurField);
    }
})

function ConvertSekToEur(sek: number): number {
    return sek * 9.56;
}

function ConvertEurToSek(eur: number): number {
    return eur * 0.1;
}

alert("Li är sötast och snyggast i hela världen");