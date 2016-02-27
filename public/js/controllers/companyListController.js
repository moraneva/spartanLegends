/**
 * Created by brian on 2/27/2016.
 */
app.controller('companyListController', ["$scope", "companyService",
    function ($scope, companyService) {

        companyService.getCompanyNames().then(function (companies) {
            $scope.companies = companies;
        });
    }]);