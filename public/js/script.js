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

        when('/registration', {
            templateUrl: 'views/registration.html',
            controller:'registrationController'
        }).

        otherwise({
            redirectTo: '/companies'

        });
});

