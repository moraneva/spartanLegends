/**
 * Created by evan on 2/27/16.
 */
app.factory('companyService', function ($http, $q) {

    var service = {};

    service.saveComment = function (userId, comment) {
        var deferred = $q.defer();



        return deferred.promise;

    };

    return service;
});