

angular.module('starter.fireRef',[])

.service('refer',function() {
     var refer = new Firebase('https://resturantapp03.firebaseio.com/');
    return refer;
});