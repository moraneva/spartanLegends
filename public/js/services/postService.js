/**
 * Created by zacharyrosenthal on 2/27/16.
 */
app.factory('postService', function ($http, $q) {

    var service = {};

    service.vote = function (direction, pId) {

        var deferred = $q.defer();

        var data = {
            direction: direction,
            pId: pId,
            uId: sessionStorage.userId
        };

        console.log(data);

        $http.post('/post/vote/', data).then(function success(response) {

            console.log(response);

            deferred.resolve(response.data);

        },
        function error (response) {

            deferred.resolve (response.data);
        }
        );

        return deferred.promise;

    };

    service.createPost = function (post) {

        var deferred = $q.defer();

        $http.post('/post/new', post).then(function (response) {

            return deferred.resolve(response.data);

        });

        return deferred.promise;
    };

    return service;
});
