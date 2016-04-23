angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, $firebaseArray, $state,facebookAuth,$location,$window,$ionicPopup) {

  $scope.loginData = {};


  $scope.doLogin = function() {
    
   facebookAuth.flogin();
    
    console.log('Doing login', $scope.loginData);

   
  };
       $scope.logout = function() {
        localStorage.removeItem('fbToken');
       // $route.reload(true);
       $window.location.reload();

        $location.path('/login');
    }
})

.controller('homeCtrl', function($scope, refer, $firebaseArray) {
    
    
    var bc = refer.child("resturants")
    
    $scope.resturants = $firebaseArray(bc);
    
    
    //     $scope.resturants.$add({
    //     rName: "Tooso",
    //     rAddr: "Bahurabad Near Sayalani Welfare",
    //     rRatting: 4,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //     rMenu: [{ menu1: "Chicken Karhai : 200 Rs"},
    //         {menu1: "Chicken Burger : 300 Rs"},
    //         {menu1: "Haleem : 700 Rs"},
    //         {menu1: "Qorma : 450 Rs"}]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Mr.Buger",
    //     rAddr: "Clifton Phase 4 Near Sea View",
    //     rRatting: 3,
    //     rLogo: '',
    //     rDevFee: 100,
    //   rMenu: [{ menu1: "Chicken Karhai : 200 Rs"},
    //         {menu1: "Chicken Burger : 300 Rs"},
    //         {menu1: "Haleem : 700 Rs"},
    //         {menu1: "Qorma : 450 Rs"}]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "KFC",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 5,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMinOrderAmount: 200,
    //    rMenu: [{ menu1: "Chicken Karhai : 200 Rs"},
    //         {menu1: "Chicken Burger : 300 Rs"},
    //         {menu1: "Haleem : 700 Rs"},
    //         {menu1: "Qorma : 450 Rs"}]
        
    // })
    //     $scope.resturants.$add({
    //     rName: "Mac Dolands",
    //     rAddr: "Clifton 2 Dariya",
    //     rRatting: 1,
    //     rLogo: '',
    //     rDevFee: 500,
    //     rMenu: [
    //         { menu1: "Chicken Karhai : 200 Rs"},
    //         {menu1: "Chicken Burger : 300 Rs"},
    //         {menu1: "Haleem : 700 Rs"},
    //         {menu1: "Qorma : 450 Rs"}
    //         ]
        
    // })
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
