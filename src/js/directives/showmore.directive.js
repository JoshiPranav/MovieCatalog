 'use strict';

 app.directive('showMore', [function() {
     return {
         restrict: 'AE',
         replace: true,
         scope: {
             text: '=',
             limit: '='
         },

         templateUrl: './js/directives/showmore.directive.html',

         link: function(scope, iElement, iAttrs) {


             scope.end = scope.limit;
             scope.isShowMore = true;
             scope.largeText = true;

             if (scope.text.length <= scope.limit) {
                 scope.largeText = false;
             };

             scope.showMore = function() {

                 scope.end = scope.text.length;
                 scope.isShowMore = false;
             };

             scope.showLess = function() {

                 scope.end = scope.limit;
                 scope.isShowMore = true;
             };
         }
     };
 }]);