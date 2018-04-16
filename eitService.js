var myapp = angular.module('eitsServiceModule', [])
myapp.factory('eitService',  function() {
  var eitList=[];

  
    
  return {
    eitList:eitList,

  };
  
});
myapp.factory('currentEitService', function() {
  var eitId;


  return {
    eitId:eitId
  };

});