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
                if (response.data) {
                    $http.defaults.headers.post.AuthToken = response.data.token;
                    if (typeof(Storage) !== "undefined") {
                        sessionStorage.userId = response.data.id;
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve(false);
                    }
                } else {

                    sessionStorage.userId = 0;
                    deferred.resolve(0);
                }
            });

        return deferred.promise;
    };

    service.logout = function () {

        $http.defaults.headers.post.AuthToken = "";
        sessionStorage.userId = 0;

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