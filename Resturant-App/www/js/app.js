// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova','starter.controllers','firebase','starter.loginService','starter.fireRef','naif.base64'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  //      loginCompulsory: true,
    controller: 'AppCtrl'
  })
    .state('login', {
     url: '/login',
     templateUrl: 'templates/login.html',
     controller: 'AppCtrl'
    })
  
  .state('app.setting', {
    url: '/setting',
    loginCompulsory: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('app.cart', {
      url: '/cart',
      loginCompulsory: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
          controller:'cartCtrl'
        }
      }
    })
    .state('app.profile',{
        url: '/profile',
        loginCompulsory: true,
        views:{
            'menuContent':{
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })
      .state('app.about',{
        url: '/about',
        loginCompulsory: true,
        views:{
            'menuContent':{
                templateUrl: 'templates/about.html'
            }
        }
    })
    .state('app.home', {
      url: '/home',
      loginCompulsory: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('app.order-form', {
      url: '/order-form',
      loginCompulsory: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/order-form.html',
          controller: 'orderFormCtrl'
        }
      }
    })

  .state('app.selected', {
    url: '/seleted/:id',
    loginCompulsory: true,
    views: {
      'menuContent': {
        templateUrl: 'templates/resturants.html',
        controller: 'selectedCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})




 .run(function($ionicPlatform,$cordovaNetwork ,$rootScope, $state, $ionicPopup) {
    
  $ionicPlatform.ready(function() {
      if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "In order to access this app you must have working internet connection."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
      }
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.$on("$stateChangeStart",function(event, toState){
            var firebaseToken = localStorage.getItem('fbToken');
            if(toState.loginCompulsory && !firebaseToken){
                event.preventDefault();
                $state.go('login');
            }
            
        })
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
 
})
 })
