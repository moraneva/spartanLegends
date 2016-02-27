/**
 * Created by ryancornillie on 2/26/16.
 */

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/companies', {
            templateUrl: '/views/companies.html',
            controller: 'companyListController'
        }).

        when('/company/:companyName' , {
            templateUrl: '/views/company.html',
            controller: 'companyController'
        }).

        otherwise({
            redirectTo: '/companies'

        });

});



app.controller('companiesCtrl', function ($scope) {

    $scope.companies =
        [
            {name: 'Facebook', icon: "fa-facebook-official"},
            {name: 'Twitter', icon: "fa-twitter"},
            {name: "Slack", icon: "fa-slack"},
            {name: "Google", icon: "fa-google"},
            {name: "Amazon", icon: "fa-amazon"}
        ]
});

app.controller('companyCtrl', function ($scope) {

    //get functions
    $scope.company = {name: "Facebook", icon: "fa-facebook-official"};
    $scope.products = ["Groups", "Pages", "News Feed", "Messenger", "Instagram", "testing1", "testing2", "testing3", "testing4", "testing5", "testing6", "Groups2", "Pages2", "Groups3", "Pages3", "Groups4", "Pages4", "Groups5", "Pages5", "Groups6", "Pages6"];
    $scope.ideas = [{
        title: "This is the best idea",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis purus eu mollis porta. Sed sed laoreet dui, a suscipit urna. Quisque facilisis purus sed nulla condimentum, nec malesuada nibh placerat. Integer ultrices pulvinar libero auctor hendrerit. Praesent varius tempus lobortis. Mauris tempor magna nunc, ac varius erat vulputate non. Mauris semper tortor consectetur leo fermentum mattis. Suspendisse vitae faucibus justo. Aliquam vitae dignissim nibh, eu sodales eros. " +
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed interdum diam sapien. Mauris tempus tellus et tincidunt pulvinar. Duis vel elementum lacus, ut sodales metus. Proin elementum erat in imperdiet ultricies."
    }];

    $scope.getPercent = function () {

        return ($scope.likes / ($scope.likes + $scope.dislikes) * 100).toString() + "%";
    };

    $scope.newComment = {};
    $scope.test = "angular";
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.commentFlag = 0;
    $scope.percent = $scope.getPercent();
    $scope.comments = [{
        user: "Zach",
        comment: "That progress bar is better than anything I have ever programmed"
    }, {user: "Ryan", comment: "Great idea!"}];

    $scope.liked = function () {

        $scope.likes++;
        $scope.percent = $scope.getPercent();
    };

    $scope.disliked = function () {

        $scope.dislikes++;
        $scope.percent = $scope.getPercent();
    };

    $scope.toggleComments = function () {

        $scope.commentFlag = !$scope.commentFlag;

    };

    $scope.addComment = function () {
        console.log($scope.newComment);
        $scope.comments.push({
            user: "Ryan",
            comment: $scope.newComment.comment
        });

        $scope.newComment.comment = null;

    };

});

