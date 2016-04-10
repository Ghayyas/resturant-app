angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $firebaseArray, $state,facebookAuth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//  //   $scope.modal.show();

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    
   facebookAuth.flogin();
    
    console.log('Doing login', $scope.loginData);

   
  };
})

.controller('PlaylistsCtrl', function($scope, refer, $firebaseArray) {
    
    
    var bc = refer.child("resturants")
    
    $scope.resturants = $firebaseArray(bc);
    
    // $scope.resturants.$add({
    //     rName: "Kolachi",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu: [{
    //        "Chicken Karhai": "200 Rs",
    //        "Chicken Burger": "300 Rs",
    //        "Haleem": "700 Rs",
    //        "Qorma": "450 Rs"
    //     }]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Tooso",
    //     rAddr: "Bahurabad Near Sayalani Welfare",
    //     rRatting: 4,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu: [{
    //        "Chicken Karhai": "2000 Rs",
    //        "Chicken Burger": "3000 Rs",
    //        "Haleem": "70 Rs",
    //        "Qorma": "40 Rs"
    //     }]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Mr.Buger",
    //     rAddr: "Clifton Phase 4 Near Sea View",
    //     rRatting: 3,
    //     rLogo: '',
    //     rDevFee: 100,
    //     rMinOrderAmount: 290,
    //     rMenu: [{
    //        "Chicken Karhai": "20 Rs",
    //        "Chicken Burger": "3000 Rs",
    //        "Haleem": "7000 Rs",
    //        "Qorma": "450 Rs"
    //     }]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "KFC",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu: [{
    //        "Chicken Karhai": "200 Rs",
    //        "Chicken Burger": "300 Rs",
    //        "Haleem": "700 Rs",
    //        "Qorma": "450 Rs"
    //     }]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Mac Dolands",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 1,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu: [{
    //        "Chicken Karhai": "200 Rs",
    //        "Chicken Burger": "300 Rs",
    //        "Haleem": "700 Rs",
    //        "Qorma": "450 Rs"
    //     }]
        
    // })
 
    
  $scope.playlists = [
    { title: 'Kolachi', id: 1 },
    { title: 'Tooso', id: 2 },
    { title: 'Mr.Burgur', id: 3 },
    { title: 'KFC', id: 4 },
    { title: 'Mac Dolands', id: 5 }
 
  ];
})
.controller('search',function($scope,$state,$location,$window){
   // var token = localStorage.getItem('fbToken');
      $scope.logout = function() {
        localStorage.removeItem('fbToken');
       // $route.reload(true);
       $window.location.reload();

        $location.path('/login')
    }
})
.controller('PlaylistCtrl', function($scope, $stateParams, refer,$firebaseObject,$firebaseArray) {
     
     var bc = refer.child("resturants");
       
       
    $scope.value = refer.child("resturants").child($stateParams.id);
    
     $scope.res = $firebaseArray($scope.value);
    
//       $scope.res.$loaded(function(success){
      
//        console.log('Success',success);
//    })
    console.log("my Valus",$scope.res);
});
