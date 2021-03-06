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
                                $scope.alreadyVoted(post.up_votes, post.down_votes, post._id);
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

        $scope.voteFlags = {};

        $scope.alreadyVoted = function (upvotes, downvotes, id) {

            if (!sessionStorage.userId) {
                $scope.voteFlags[id] = false
                return false;
            }
            console.log("checking voted");

            console.log(upvotes);
            console.log(downvotes);

            if (downvotes.indexOf(sessionStorage.userId) > -1) {
                $scope.voteFlags[id] = true;
                return true;
            }
            else if (upvotes.indexOf(sessionStorage.userId) > -1) {
                $scope.voteFlags[id] = true;

                return true;
            }

            else {
                $scope.voteFlags[id] = false;
                return false;
            }

        };

        /*
        $scope.liked = function (post) {

            console.log($scope.selectedProduct);

            if (!$scope.alreadyVoted(post.up_votes, post.down_votes, post._id)) {
                postService.vote(1, post._id).then(function (response) {

                        post.up_votes.push(response);

                    },
                    function (response) {
                        $scope.voteFlags[post._id] = true;
                        alert('Cant do that');
                    }
                );
            }
            else {
                console.log("like denied");
            }
        };

        $scope.disliked = function (post) {
            if (!$scope.alreadyVoted(post.up_votes, post.down_votes, post._id)) {
                postService.vote(0, post._id).then(function (response) {

                        post.down_votes.push(response);

                    },
                    function (response) {

                        alert('Cant do that');
                    }
                );
            }

            else {
                console.log("dislike denied");
            }
        };*/

        $scope.liked = function(post){
            post.up_votes.push($scope.loggedIn);
        };

        $scope.disliked = function(post){
                post.down_votes.push($scope.loggedIn);

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
                    $scope.selectedProduct.posts.unshift(post);
                    $scope.commentFlag[post._id] = 0;
                });

            }
            else {
                alert('You must be signed in ');
            }
        };

        _init();

    }]);