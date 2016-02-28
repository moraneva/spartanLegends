app.controller('registrationController', ["$scope", "$routeParams", "productService",
    function ($scope, $routeParams, productService) {

        $scope.register = function(form){

            if(form.$valid){

                console.log("valid form");

            }
        }
    }]);