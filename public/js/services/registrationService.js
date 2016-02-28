/**
 * Created by ryancornillie on 2/28/16.
 */

app.factory('registrationService', function ($http, $q) {

    var service = {};

    service.newUser = function (user) {
        var deferred = $q.defer();

        $http.post('/auth/register', user).then(
            function success(response) {
                if (response.data) {
                    $http.defaults.headers.post.AuthToken = response.data.token;
                    if (typeof(Storage) !== "undefined") {
                        sessionStorage.userId = response.data.id;
                        console.log(sessionStorage.userId);
                        deferred.resolve(sessionStorage.userId);
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

    return service;
});