'use strict';

angular.module('myApp.match-info-coll', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('match-info-coll', {
      url:"/match-info-coll",
        views:{
          'index':{
            templateUrl: 'match-info-coll/match-info-coll.html',
            controller: 'match-info-collCtrl'
          }
        }
  });
}])

.controller('match-info-collCtrl', [function() {

}]);