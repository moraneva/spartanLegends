/**
 * Created by ryancornillie on 2/28/16.
 */

app.factory('registrationService', function ($http, $q) {

    var service = {};

    service.newUser = function (user){
        var deferred = $q.defer();

        $http.post('/newUser/', user).then(
            function success(response) {

            }
        );

        return deferred.promise;
    };


    return service;
});