'use strict';

angular.module('App')
    .controller('MovieSearchController', ['$scope', 'MovieSearchService',
        function($scope, $movieSearchService) {
            $scope.searchResults = [];
            $scope.title = '';
            $scope.year = '';
            $scope.postSearch = false;

            $scope.sortType = 'Title';
            $scope.sortReverse = false;
            var pendingTask;

            $scope.search = function() {
                $movieSearchService.Search($scope.title, $scope.year).then(function(response) {
                    $scope.searchResults = response.data;
                    $scope.postSearch = true;
                });
            };

            $scope.modalShown = false;
            $scope.toggleModal = function() {
                $scope.modalShown = !$scope.modalShown;
            };
        }
    ]);