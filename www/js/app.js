// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controller_beispiele.js
angular.module('app', ['ionic', 'ngRoute', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'views/login/loginView.html',
      controller: 'loginController'
    })

    .state('privacy', {
      url: '/privacy',
      templateUrl: 'views/privacy/privacyView.html',
      controller: 'privacyController'
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html'
  })

  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'views/settings/settingsView.html',
          controller: 'settingsController'
        }
      }
    })
    .state('app.timer', {
      url: '/timer',
      views: {
        'menuContent': {
          templateUrl: 'views/timer/timerView.html',
          controller: 'timerController'
        }
      }
    })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
