describe('Testing a Controller that uses a Promise', function () {
  
  var $scope;
  var utils;

  beforeEach(module('testUtils'));
  beforeEach(module('search'));

  beforeEach(inject(function($controller, _$rootScope_, searchService, _utils_) {
    $scope = _$rootScope_.$new();
    utils = _utils_;
    
    $controller('SearchController', { 
      $scope: $scope, 
      searchService: searchService
    });
  }));

  it('should resolve promise', function () {
    utils.resolvePromise(searchService, 'search', {"Title":"Breaking Bad","Year":"2008–2013","Rated":"TV-14","Released":"20 Jan 2008","Runtime":"49 min","Genre":"Crime, Drama, Thriller","Director":"N/A","Writer":"Vince Gilligan","Actors":"Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris","Plot":"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.","Language":"English, Spanish","Country":"USA","Awards":"Won 2 Golden Globes. Another 132 wins & 218 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"9.5","imdbVotes":"889,883","imdbID":"tt0903747","Type":"series","totalSeasons":"5","Response":"True"});
    $scope.$apply();
    expect($scope.results).not.toBe(undefined);
    expect($scope.error).toBe(undefined);
  });
  
  it('should reject promise', function () {
    utils.rejectPromise(searchService, 'search');
	  $scope.$apply();
    expect($scope.results).toBe(undefined);
    expect($scope.error).toBe('There has been an error!');
  });

});