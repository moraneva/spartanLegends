/**
 * Created by brian on 2/27/2016.
 */
app.factory('companyService', function ($http, $q) {

    var service = {};

    service.getCompanyNames = function () {
        var deferred = $q.defer();

        $http.get('/company').then(
            function success(response) {
                deferred.resolve(response.data);
            }
        );

        return deferred.promise;
    };
    service.getOneCompanyName = function(name) {
        var deferred = $q.defer();

        $http.get('/company/'+name).then(
            function success(response) {
                deferred.resolve(response.data);
            }
        );

        return deferred.promise;
    };

});
