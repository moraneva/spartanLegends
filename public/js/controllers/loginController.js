/**
 * Created by evan on 2/27/16.
 */
app.controller('loginController', ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {

        $scope.init = function () {

            if (sessionStorage.userId == undefined || sessionStorage.userId == 0) {
                $scope.loggedIn = 0;
            } else {
                $scope.loggedIn = sessionStorage.userId;
            }
        };

        $scope.init();

        $scope.login = function () {
            if (!$scope.username) {
                alert('Can\'t have a blank login');
                return;
            }
            loginService.authenticate($scope.username, $scope.password).then(function success(successful) {

                $scope.loggedIn = successful;

                if (!successful) {
                    alert('Login Failed');
                    return
                }
                else {

                    $location.path('/home');
                }

                console.log($scope.loggedIn);
            });
        };

        $scope.logout = function () {

            loginService.logout();
            $scope.loggedIn = 0;
        };

        $scope.postTest = function () {

            console.log("here");

            loginService.test();
        }
    }]);