

angular.module('starter.loginService', [])

.service('facebookAuth',function($state) {

  var ref = new Firebase("https://resturantapp03.firebaseio.com/");
var userData;
this.flogin = function(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    return error;
  } else {
    console.log("Authenticated successfully with payload:", authData);
    
    ref.child("users").child(authData.uid).set({
      authData: authData
      //name: getName(authData)
    });
         userData = authData;
    var fbToken = authData.uid;
   //this.facebook = authData;
     localStorage.setItem('fbToken',fbToken);
      var cd = JSON.stringify(userData)
     localStorage.setItem('userData',cd);
      $state.go("app.home");
      console.log('token set',fbToken)
      //return authData;
  }
  });
  
}
})
 


//    this.ref.authWithOAuthPopup("facebook", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//     var fbToken = authData.uid;
    
//     localStorage.setItem('fbToken',fbToken);
//       $state.go("app.playlists");
//       console.log('token set',fbToken)
    
//   }
//  });
