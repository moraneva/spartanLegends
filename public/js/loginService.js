/**
 * Created by evan on 2/27/16.
 */
app.factory('loginService', function ($http, $q) {

    var service = {};

    service.authenticate = function (username, password) {
        var deferred = $q.defer();

        var userData = {
            username: username,
            password: password
        };

        $http.post('/auth/login', userData).then(
            function success(response) {
                if (typeof(Storage) !== "undefined") {
                    sessionStorage.authToken = response.data;
                }
                else {

                }
                console.log(token);
            },
            function error() {

            });

        return deferred.promise;
    };

    return service;

});