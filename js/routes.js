/**
 * routes.js
 * Created by yonggang wang on 2015/3/12.
 * qq:135274859
 */
angular.module('starter.routes', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: "main.html",
                controller: 'CityCtrl'
            })

        ;
// if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app');
    });