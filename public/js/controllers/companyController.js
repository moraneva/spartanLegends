/**
 * Created by Owner on 2/27/2016.
 */
app.controller('companyController', ["$scope", "$routeParams", "companyService",
    "productService", "commentService", "postService",
    function ($scope, $routeParams, companyService, productService, commentService,
              postService) {

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

        $scope.newComment = [];
        $scope.commentFlag = [];

        $scope.liked = function (post) {

            postService.vote(1, post._id).then(function (response) {
                post.up_votes.push(response.id);
            },
            function (response) {

                alert('Cant do that');
            }

            );
        };

        $scope.disliked = function (post) {

            postService.vote(0, post._id).then(function (response) {
                post.down_votes.push(response.id);
            },
            function (response) {

                alert('Cant do that');
            }
            );
        };

        $scope.toggleComments = function (post) {

            $scope.commentFlag[post._id] = !$scope.commentFlag[post._id];

        };

        $scope.addComment = function (post) {

            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.userId) {
                    var comment = {
                        userId: sessionStorage.userId,
                        postId: post._id,
                        text: $scope.newComment[post._id]
                    };

                    commentService.saveComment(comment).then(function (comment) {
                        post.comments.push(comment);
                    });

                }
                else {
                    alert('You are not logged in, you can not comment on posts.');
                }
            }

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

        $scope.newPostSubmit = function () {

            if (sessionStorage.userId) {
                var post = {
                    user: sessionStorage.userId,
                    post: $scope.newPostDescription,
                    title: $scope.newPostTitle,
                    product: $scope.selectedProduct._id
                };

                postService.createPost(post).then(function (post) {
                    $scope.selectedProduct.posts.push(post);
                });

            }
            else {
                alert('You must be signed in ');
            }
        };

        _init();

    }]);