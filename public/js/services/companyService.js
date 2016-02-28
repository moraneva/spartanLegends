/**
 * Created by brian on 2/27/2016.
 */
app.factory('companyService', function ($http, $q) {

    var service = {};

    service.getCompanies = function () {
        var deferred = $q.defer();

        $http.get('/company').then(
            function success(response) {
                deferred.resolve(response.data);
            }
        );

        return deferred.promise;
    };
    service.getOneCompany = function (name) {
        var deferred = $q.defer();

        $http.get('/company/' + name).then(
            function success(response) {
                deferred.resolve(response.data);
            }
        );

        return deferred.promise;
    };

    service.createCompany = function (company){
        var deferred = $q.defer();

        $http.post('/company/',company).then(
            function success(response) {

            }
        );

        return deferred.promise;
    };

    return service;
});
