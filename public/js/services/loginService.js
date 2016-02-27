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
                    if (response.data) {
                        sessionStorage.loggedIn = true;
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                }
                else {
                    deferred.resolve(false);
                }
            },
            function error() {
                deferred.resolve(false);
            });

        return deferred.promise;
    };

    return service;

});