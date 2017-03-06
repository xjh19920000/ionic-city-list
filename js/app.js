/**
 * app.js
 * Created by yonggang wang on 2015/3/12.
 * qq:135274859
 */
angular.module('starter', ['ionic', 'starter.routes', 'starter.controllers', 'starter.directives'])

    .run(function ( $ionicConfig) {

        // Override the Android platform default to add "tabs-striped" class to "ion-tabs" elements.
        $ionicConfig.tabs.position('bottom').style('standard');
        $ionicConfig.backButton.text('').icon('ion-ios-arrow-left calm');
        $ionicConfig.backButton.previousTitleText(false);
        $ionicConfig.navBar.alignTitle('center');

    })
