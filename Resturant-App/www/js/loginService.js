

angular.module('starter.loginService', [])

.service('facebookAuth',function($state) {

  this.ref = new Firebase("https://resturantapp03.firebaseio.com/");

this.flogin = function(){
  this.ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    return error;
  } else {
    console.log("Authenticated successfully with payload:", authData);
    var fbToken = authData.uid;
    
    localStorage.setItem('fbToken',fbToken);
      $state.go("app.playlists");
      console.log('token set',fbToken)
       return authData   
  }
 });    
 
}

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
   
})