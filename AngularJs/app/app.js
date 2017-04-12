'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.home',
  'myApp.match-introduction',
  'myApp.matchIntroduction',
  'myApp.organization',
  'myApp.org-group',
  'myApp.guests',
  'myApp.guwenpw',
  'myApp.media',
  'myApp.communication',
  'myApp.match-info-coll',
  'myApp.match-video-coll',
  'myApp.competitor',
  'myApp.match-news',
  'myApp.match-notice',
  'myApp.support-enterprises',
  'myApp.view2',
  'myApp.version'


]).
config(['$locationProvider', '$stateProvider','$urlRouterProvider', function($locationProvider, $stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url: '/home',
        views:{
            'index':{
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl', //也可以写成HomeController as home
                controllerAs: 'home'
            }
        }
    }).state("pw_detail",{
        url: '/pw_detail',
        views: {
            'index': {
                templateUrl: 'guwenpw/pw_detail.html',
                controller: 'guwenpwCtrl', //也可以写成HomeController as home
                controllerAs: 'guwenpw'
            }
        }
    }).state('matchIntroduction',{
        url: '/matchIntroduction/:introduction',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
           'matchIntroductions@matchIntroduction': {
               templateUrl: 'match-introduction/match-introduction.html',
           }
        }
    }).state('match-introduction',{
        url: '/match-introduction/:introduction',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@match-introduction': {
                templateUrl: 'match-introduction/match-introduction.html',
            }
        }
    }).state('organization',{
        url: '/organization/:organization',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@organization': {
                templateUrl: 'organization/organization.html',
            }
        }
    }).state('org-group',{
        url: '/org-group/:group',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@org-group': {
                templateUrl: 'org-group/org-group.html',
            }
        }
    }).state('guests',{
        url: '/guests/:guests',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@guests': {
                templateUrl: 'guests/guests.html',
            }
        }
    }).state('guwenpw',{
        url: '/guwenpw/:guwenpw',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@guwenpw': {
                templateUrl: 'guwenpw/guwenpw.html',
            }
        }
    }).state('media',{
        url: '/media/:media',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@media': {
                templateUrl: 'media/media.html',
            }
        }
    }).state('communication',{
        url: '/communication/:communication',
        views: {
            'index': {
                templateUrl: "matchIntroduction/matchIntroduction.html",
                controller: 'MatchIntroductionCtrl',
            },
            'matchIntroductions@communication': {
                templateUrl: 'communication/communication.html',

            }
        }
    }).state('competitor',{
        url: '/competitor',
        views: {
            'index': {
                templateUrl: "competitor/competitor.html",
                controller: 'competitorCtrl',
            }
        }
    }).state('match-video-coll',{
        url: '/match-video-coll',
        views: {
            'index': {
                templateUrl: "match-video-coll/match-video-coll.html",
                controller: 'match-video-collCtrl',
            }
        }
    }).state('match-video-play',{
        url: '/match-video-play/:id',
        views: {
            'index': {
                templateUrl: "match-video-coll/match-video-play.html",
                controller: 'match-video-collCtrl',
            }
        }
    })
    $urlRouterProvider.otherwise("/home")
}]).controller("switchActive",function ($scope) {
    $scope.toggle = function () {

    }
});
