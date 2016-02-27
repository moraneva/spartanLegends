/**
 * Created by evan on 2/27/16.
 */
app.controller('productController', ["$scope", "$routeParams", "productService",
    function ($scope, $routeParams, productService) {

        productService.getProduct().then(function (product) {
            $scope.product = product;
        });

        //productService.createProduct(products);
    }]);