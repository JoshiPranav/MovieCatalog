'use strict';

app.controller('MovieInfoController', ['$scope', '$modalInstance', 'movieDetails',
    function($scope, $modalInstance, movieDetails) {
        $scope.movieDetails = movieDetails;
        $scope.close = function() {
            $modalInstance.close();
        };
    }
]);