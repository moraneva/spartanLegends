/**
 * Created by ryancornillie on 2/26/16.
 */

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/views/home.html',
        controller: 'myCtrl'
    }).when('/login', {
            templateUrl: '/views/login.html'
        })

        .otherwise({
            redirectTo: '/home'
        });

});

app.controller('myCtrl', function ($scope) {

    $scope.getPercent = function () {

        return ($scope.likes / ($scope.likes + $scope.dislikes) * 100).toString() + "%";
    };

    $scope.test = "angular";
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.percent = $scope.getPercent();

    $scope.liked = function () {

        $scope.likes++;
        $scope.percent = $scope.getPercent();
    };

    $scope.disliked = function () {

        $scope.dislikes++;
        $scope.percent = $scope.getPercent();
    };
});

