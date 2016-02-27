/**
 * Created by evan on 2/27/16.
 */
app.controller('loginController', ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {

        $scope.login = function () {
            if (!$scope.username) {
                alert('Can\'t have a blank login');
                return;
            }
            loginService.authenticate($scope.username, $scope.password).then(function success(successful) {
                if (!successful) {
                    alert('Login Failed');
                    return
                }
                else {
                    $location.path('/home');
                }
            });
        };
    }]);