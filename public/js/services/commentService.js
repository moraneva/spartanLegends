/**
 * Created by evan on 2/27/16.
 */
app.factory('commentService', function ($http, $q) {

    var service = {};

    service.saveComment = function (comment) {
        var deferred = $q.defer();

        $http.post('/comment/', comment).then(function (comment) {

            deferred.resolve(comment);

        });

        return deferred.promise;

    };

    return service;
});