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
                $http.defaults.headers.post.AuthToken = response.data.token;
                if (typeof(Storage) !== "undefined") {
                    if (response.data) {
                        sessionStorage.userId = response.data.id;
                        console.log(sessionStorage.userId);
                    }
                    else {
                        console.log(sessionStorage.userId);
                        deferred.resolve(false);
                    }
                }
            },
            function error() {
                deferred.resolve(false);
            });

        return deferred.promise;
    };

    service.test = function () {

        $http.post('/auth/test', {data: "hi mom"}).then(
            function s(response) {
                console.log(response);
            }, function e(er) {
                console.log(er);
            });

    };

    return service;

});