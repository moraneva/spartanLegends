/**
 * Created by brian on 2/27/2016.
 */
app.controller('companyListController', ["$scope", "companyService", "productService",
    function ($scope, companyService, productService) {

        companyService.getCompanies().then(function (companies) {
            $scope.companies = companies;
        });

    }]);