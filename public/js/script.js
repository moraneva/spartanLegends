/**
 * Created by ryancornillie on 2/26/16.
 */

var app = angular.module('myApp', []);

app.controller('myCtrl', ["$scope", "loginService", function ($scope, loginService) {

    //loginService.authenticate("brianuser", "brianpass");

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

}]);