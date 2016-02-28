app.controller('registrationController', ["$scope", "$routeParams", "registrationService", "loginService",
    function ($scope, $routeParams, registrationService, loginService) {

        $scope.register = function(form){

            console.log(form);

            if(form.$valid){

                var user = {
                    name: form.name.$modelValue,
                    username: form.username.$modelValue,
                    password: form.password.$modelValue
                };

                console.log(user);

                registrationService.newUser(user).then(function (user) {
                    loginService.authenticate(user.username, user.password);

                });


            }
        }
    }]);

