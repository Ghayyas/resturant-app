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

.controller('homeCtrl', function($scope, refer, $firebaseArray) {
    
    
    var bc = refer.child("resturants")
    
    $scope.resturants = $firebaseArray(bc);
    
    // console.log($scope.resturants);
    
    // $scope.resturants.$add({
    //     rName: "Kolachi",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        { menu1: "Chicken Karhai : 200 Rs"},
    //        {menu1: "Chicken Burger : 300 Rs"},
    //        {menu1: "Haleem : 700 Rs"},
    //        {menu1: "Qorma : 450 Rs"}
    //     ]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Kolachi",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        { menu1: "Chicken Karhai : 200 Rs"},
    //        {menu1: "Chicken Burger : 300 Rs"},
    //        {menu1: "Haleem : 700 Rs"},
    //        {menu1: "Qorma : 450 Rs"}
    //     ]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Kolachi",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        { menu1: "Chicken Karhai : 200 Rs"},
    //        {menu1: "Chicken Burger : 300 Rs"},
    //        {menu1: "Haleem : 700 Rs"},
    //        {menu1: "Qorma : 450 Rs"}
    //     ]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Kolachi",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        { menu1: "Chicken Karhai : 200 Rs"},
    //        {menu1: "Chicken Burger : 300 Rs"},
    //        {menu1: "Haleem : 700 Rs"},
    //        {menu1: "Qorma : 450 Rs"}
    //     ]
        
    // })
    
    //     $scope.resturants.$add({
    //     rName: "dfdf",
    //     rAddr: "dfdf",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        {"Chicken Karhai": "200 Rs"},
    //        {"Chicken Burger": "300 Rs"},
    //        {"Haleem": "700 Rs"},
    //        {"Qorma": "450 Rs"}
    //     ]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "wetrf",
    //     rAddr: "vsrer",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu:[ 
    //        {"Chicken Karhai": "200 Rs"},
    //        {"Chicken Burger": "300 Rs"},
    //        {"Haleem": "700 Rs"},
    //        {"Qorma": "450 Rs"}
    //     ]
        
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
.controller('settingCtrl',function($scope,$state,$location,$window){
   // var token = localStorage.getItem('fbToken');
      $scope.logout = function() {
        localStorage.removeItem('fbToken');
       // $route.reload(true);
       $window.location.reload();

        $location.path('/login');
    }
    

})
.controller('selectedCtrl', function($scope, $stateParams, refer,$firebaseObject,$firebaseArray) {
     
     $scope.bc = refer.child("resturants");

       
    $scope.value = refer.child("resturants").child($stateParams.id);
    
    
    
    
     $scope.res = $firebaseObject($scope.value);
     $scope.arr  = $firebaseArray($scope.value);
     
     $scope.myOrder = function(id){
         localStorage.setItem('orderID',id);
         console.log("ID is ",id);
     }
     
//    var abc = JSON.parse($scope.arr);
    
   
   



})
  .controller('profileCtrl', function($scope) {
     
      var aaa = localStorage.getItem('userData')
      var abc = JSON.parse(aaa) //converting string to object
      $scope.profile = abc;
      console.log('userProfile', abc);
     
  
})

.controller('orderFormCtrl',function($scope,refer,$firebaseArray){

     var userToken  = localStorage.getItem('fbToken');

    $scope.myOrders = new Firebase(refer + '/person-orders')
    $scope.userID  = $scope.myOrders.child(userToken); 
    $scope.orders = $firebaseArray($scope.userID)
    $scope.user = {}
    $scope.createOrder = function(){
        // console.log('index is',$scope.id);    
             var getKey = localStorage.getItem('orderID');
        //    var resKey = JSON.parse(getKey);
          $scope.orders.$add({
              firstName: $scope.user.firstName,
              lastName : $scope.user.lastName,
              resturantName: getKey,
              email: $scope.user.email,
              address: $scope.user.addr,
              phone: $scope.user.phoneNum,
              orderName: $scope.user.orderName,
              orderQuantity: $scope.user.orderQuantity,
              time: Firebase.ServerValue.TIMESTAMP
             })
           $scope.user = "";
           localStorage.removeItem('orderID');
    }
    
})
  .controller('cartCtrl',function($scope, $firebaseArray,refer, $firebaseObject){
    
     var userToken  = localStorage.getItem('fbToken');
     $scope.myOrders = new Firebase(refer + '/person-orders')
    $scope.userID  = $scope.myOrders.child(userToken); 
    
    $scope.orders = $firebaseArray($scope.userID);

 


  
})
