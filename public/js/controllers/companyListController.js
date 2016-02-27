/**
 * Created by brian on 2/27/2016.
 */
app.controller('companyListController', ["$scope", "companyService", "productService",
    function ($scope, companyService, productService) {

        productService.getProduct("5126bc054aed4daf9e2ab793");
        companyService.getCompanies().then(function (companies) {
            $scope.companies = companies;
        });
    }]);