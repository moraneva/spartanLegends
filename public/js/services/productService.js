/**
 * Created by evan on 2/27/16.
 */
app.factory('productService', function ($http, $q) {

    var service = {};

    service.getProduct = function (productId) {
        var deferred = $q.defer();

        $http.get('/product/' + productId).then(
            function success(response) {
                deferred.resolve(response.data);
            }
        );

        return deferred.promise;
    };

    service.createProduct = function (product){
        var deferred = $q.defer();

        $http.post('/product/',product).then(
            function success(response) {

            }
        );

        return deferred.promise;
    }


    return service;
});