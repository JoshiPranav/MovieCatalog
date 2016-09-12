'use strict'

angular.module('App')
    .factory('MovieSearchService', ['$http', function($http) {

        this.search = function(title, year) {
            var url = "http://www.omdbapi.com/?s=" + title;

            if (year) {
                url = url + "&y=" + year;
            }

            url = url + "&plot=short&r=json";

            return $http.get(url);
            // .then(function(response) {
            //     return response.data;
            // });
            //.error("Error calling the service.");

        };

        // function fetch(id) {
        //     $http.get("http://www.omdbapi.com/?i=" + id + "&plot=short&r=json")
        //         .success(function(response) {
        //             return response;
        //         })
        //         .error("Error calling the service.");
        // }

        return {
            Search: this.search
        };
    }]);