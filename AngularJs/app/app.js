'use strict';

    require('./bower_components/angular/angular.js')
    require('./bower_components/angular-route/angular-route.js')
    require('./bower_components/angular-ui-router/release/angular-ui-router.js')
    require('./components/version/version.js')
    require('./components/version/version-directive.js')
    require('./components/version/interpolate-filter.js')
    require('./home/home.js')
    require('./matchIntroduction/matchIntroduction.js')
    require('./guwenpw/guwenpw.js')
    require('./match-info-coll/match-info-coll.js')
    require('./match-video-coll/match-video-coll.js')
    require('./match-news/match-news.js')
    require('./match-notice/match-notice.js')
    require('./support-enterprises/support-enterprises.js')
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.home',
  'myApp.matchIntroduction',
  'myApp.match-info-coll',
  'myApp.match-video-coll',
  'myApp.match-news',
  'myApp.guwenpw',
  'myApp.match-notice',
  'myApp.support-enterprises',
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
        url: '/pw_detail/:index',
        views: {
            'index': {
                templateUrl: 'guwenpw/pw_detail.html',
                controller: 'guwenpwCtrl',
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
    }).state('supportEnterprise', {
            url:"/supportEnterprise",
            views: {
                'index': {
                    templateUrl: 'supportEnterprise/supportEnterprise.html',
                }
            }
        }).state('apply', {
            url:"/apply",
            views: {
                'index': {
                    templateUrl: 'apply/apply.html',
                }
            }
        })
    $urlRouterProvider.otherwise("/home")
}]).controller("switchActive",function ($scope) {
    $scope.toggle = function () {

    }
});
