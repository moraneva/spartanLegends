/**
 * Created by Owner on 2/27/2016.
 */
app.controller('companyController', ["$scope", "$routeParams", "companyService", "productService",
    function ($scope, $routeParams, companyService, productService) {

        function _init() {
            var companyName = $routeParams.companyName;
            companyService.getOneCompany(companyName).then(function (company) {
                $scope.company = company;
                $scope.products = $scope.company.products;
                if ($scope.products.length) {
                    productService.getProduct($scope.products[0]._id)
                        .then(function (product) {
                            $scope.selectedProduct = product;
                            $scope.selectedProduct.posts.forEach(function (post) {
                                var id = post._id;
                                $scope.commentFlag[id] = 0;
                            });
                        });
                }
            });
        }

        $scope.ideas = [{
            title: "This is the best idea",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis purus eu mollis porta. Sed sed laoreet dui, a suscipit urna. Quisque facilisis purus sed nulla condimentum, nec malesuada nibh placerat. Integer ultrices pulvinar libero auctor hendrerit. Praesent varius tempus lobortis. Mauris tempor magna nunc, ac varius erat vulputate non. Mauris semper tortor consectetur leo fermentum mattis. Suspendisse vitae faucibus justo. Aliquam vitae dignissim nibh, eu sodales eros. " +
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed interdum diam sapien. Mauris tempus tellus et tincidunt pulvinar. Duis vel elementum lacus, ut sodales metus. Proin elementum erat in imperdiet ultricies."
        }];

        $scope.getPercent = function (post) {

            return (post.up_votes.length / (post.up_votes.length + post.down_votes.length) * 100).toString() + "%";
        };

        $scope.newComment = {};
        $scope.test = "angular";
        $scope.commentFlag = [];

        $scope.liked = function (post) {

            post.up_votes.push(69);
        };

        $scope.disliked = function (post) {

            post.down_votes.push(69);
        };

        $scope.toggleComments = function (post) {

            $scope.commentFlag[post._id] = !$scope.commentFlag[post._id];

        };

        $scope.addComment = function (post) {
            post.comments.push({
                user: {username: "Ryan"},
                text: $scope.newComment[post._id]
            });

            $scope.newComment[post._id] = null;

        };

        $scope.onClickProduct = function (product) {
            productService.getProduct(product._id)
                .then(function (product) {
                    $scope.selectedProduct = product;
                    $scope.selectedProduct.posts.forEach(function (post) {
                        var id = post._id;
                        $scope.commentFlag[id] = 0;
                    });
                });
        };

        _init();

    }]);