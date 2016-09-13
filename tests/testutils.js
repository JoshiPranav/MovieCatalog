//utility calls to resolve/reject promises. This is common code which can then be used to test many services
//which return promises such as :  return $http.get
'use strict';

angular.module('testUtils', [])
  .factory('utils', function utilsFactory($q) {

  var setupPromise = function(object, method, data, resolve) {
    spyOn(object, method).and.callFake(function() {
        var deferred = $q.defer();
        if (resolve) {
          deferred.resolve(data);
        } else {
          deferred.reject(data);
        }

        return deferred.promise;
      });
  };

  var service = {};

  service.resolvePromise = function(object, method, data) {
    return setupPromise(object, method, data, true);
  };

  service.rejectPromise = function(object, method, data) {
    return setupPromise(object, method, data, false);
  };

  return service;
});