/**
 * Created by zacharyrosenthal on 2/27/16.
 */
app.factory('postService', function ($http, $q) {
    service.vote = function (direction, pId) {

        var deferred = $q.defer();

        var data = {
            direction: direction,
            pId: pId,
            uId: sessionStorage.userId
        };

        $http.post('/post/vote/', data).then(function (response) {

            deferred.resolve(response.data);

        });

        return deferred.promise;

    };

    return service;
});
