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
        }).

        when('/companies', {
            templateUrl: '/views/companies.html',
            controller: 'companiesCtrl'
        }).

        otherwise({
            redirectTo: '/companies'

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
    $scope.comments =[{user:"Zach", comment: "That progress bar is better than anything I have ever programmed"},{user:"Ryan", comment:"Great idea!"}];

    $scope.liked = function () {

        $scope.likes++;
        $scope.percent = $scope.getPercent();
    };

    $scope.disliked = function () {

        $scope.dislikes++;
        $scope.percent = $scope.getPercent();
    };

    $scope.addComment = function() {

        $scope.comments.push({
            user: "Ryan",
            comment: $scope.userComment
        });


    }
});


app.controller('companiesCtrl', function ($scope) {

    $scope.companies =
        [
            {name:'Facebook', icon:"fa-facebook-official"},
            {name:'Twitter', icon: "fa-twitter" },
            {name:"Slack", icon:"fa-slack"},
            {name:"Google", icon: "fa-google"},
            {name: "Amazon", icon:"fa-amazon"}
        ]
});

