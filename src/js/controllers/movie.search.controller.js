'use strict';

app.controller('MovieSearchController', ['$scope', 'MovieService', '$modal',
    function($scope, $movieService, $modal) {

        //private function. Init scope vars.
        var init = function() {
            $scope.searchResults = [];
            $scope.title = '';
            $scope.year = '';
            $scope.resultCount = 0;
            $scope.sortType = 'Title';
            $scope.sortReverse = false;
        };

        //search click - calls service
        $scope.search = function() {
            $scope.resultCount = 0;
            $movieService.Search($scope.title, $scope.year).then(function(response) {
                if (response && response.data && response.data.Search) {
                    $scope.searchResults = response.data;
                    $scope.resultCount = response.data.Search.length;
                }
            });
        };

        $scope.ShowDetails = function(imdbID) {
            $movieService.Fetch(imdbID).then(function(response) {
                if (response && response.data) {
                    $scope.movie = response.data;
                    var modalInstance = $modal.open({
                        templateUrl: './partials/movie-info.html',
                        controller: 'MovieInfoController',
                        size: 'lg',
                        resolve: {
                            movieDetails: function() {
                                return $scope.movie;
                            }
                        }
                    });
                }
            });

        };


        init();
    }
]);