  'use strict';

  app.directive('starRating', [function() {
      return {
          restrict: 'EA',
          templateUrl: './js/directives/rating.directive.html',
          scope: {
              ratingValue: '=ngModel',
              max: '=?',
              onRatingSelect: '&?',
              readonly: '=?'
          },
          link: function(scope, element, attributes) {
              if (scope.max == undefined) {
                  scope.max = 5;
              }

              function fillStars() {
                  scope.stars = [];
                  for (var i = 0; i < scope.max; i++) {
                      scope.stars.push({
                          filled: i < scope.ratingValue
                      });
                  }
              };
              scope.toggle = function(index) {
                  return;
              };
              scope.$watch('ratingValue', function(oldValue, newValue) {
                  if (newValue) {
                      fillStars();
                  }
              });
          }
      };
  }]);