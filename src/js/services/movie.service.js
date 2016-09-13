'use strict'

app.factory('MovieService', ['$http', function($http) {

        this.search = function(title, year) {
            var url = "http://www.omdbapi.com/?s=" + title;

            if (year) {
                url = url + "&y=" + year;
            }

            url = url + "&plot=short&r=json";

            return $http.get(url);
        };

        this.fetch = function(id) {
            var url = "http://www.omdbapi.com/?i=" + id + "&plot=full&r=json";
            return $http.get(url);
        }

        return {
            Search: this.search,
            Fetch: this.fetch
        };
    }]);