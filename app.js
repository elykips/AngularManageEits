// Constants used for age calculation.
var MS_YEAR = 31556952000; // https://www.calculateme.com/Time/Years/ToMilliseconds.htm
var MS_MONTH = 2629746000; // https://www.calculateme.com/Time/Months/ToMilliseconds.htm
var MS_DAY = 86400000; // https://www.calculateme.com/Time/Days/ToMilliseconds.htm

// Angular module, with a controller.
angular.module('eitApp', ["eitsServiceModule"])
  // 'Controller' is arbitrary. The name that matters is 'EitController'.
  .controller('EitController', ['eitService','currentEitService', function EitController(eitService, currentEitService) {
    this.id;
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.email = '';
    this.pictureUrl = '';
    this.dob = null;
    this.currentEitId;
  
    
    
    
    
    // get eits list
    this.mestEits = eitService.eitList;
   
    
  
    // this.captureCurrentMester = function captureCurrentEit(eit){
    //  currentEitService.eit = eit;
    //  this.currentEit = currentEitService.eit;
    //  return this.currentEit;

    // }

     this.setCurrentEitId = function currentEitId(eit){
     this.currentEitId = eit;

    }

    this.showCurrentEit = function displayCurrentEit(unique){
    
    }

    
      // add new eit
    this.newEit = function addNewEit(){
      eitService.eitList.push({'uniqueKey':this.id, 'firstName': this.firstName, 'lastName': this.lastName, 'pictureUrl':this.pictureUrl,'email': this.email, 'gender': this.gender, 'dob': this.dob, 'age':this.age()});
      console.log(eitService.eitList);
      
    }
    
    
    // Note that this.gender isn't declared here explicitly. It's unnecessary,
    // because ng-model="ctrl.gender" will also do the declaration for us. Also,
    // I'm not using it anywhere in the js code, so there's no need for a
    // reference.
    
    // I concatenate this.gName and this.lName, adding a space between them.
    // 'generateName' is arbitrary. The name that matters is 'this.getFullName'.
    this.fullName = function getFullName() {
      return this.firstName + ' ' + this.lastName;
    };
    
    // I calculate the full age using the current date minus this.dob.
    // 'calculateAge' is arbitrary. The name that matters is 'this.getAge'.
    this.age = function calculateAge() {
      // Return an empty string if this.dob is not set.
      if (!this.dob) {
        return '';
      }
      
      // Get the current date.
      var now = new Date();
      
      // Don't calculate age if this.dob is in the future.
      if (this.dob > now) {
        return 'Please enter a date in the past.'
      }
      
      var y, m, d;

      var remainder = (now - this.dob);
      y = Math.floor(remainder / MS_YEAR);
      remainder = remainder % MS_YEAR;
      m = Math.floor(remainder / MS_MONTH);
      remainder = remainder % MS_MONTH;
      d = Math.floor(remainder / MS_DAY);
      return y + " years ";
      
      // return y + " years, " + m + " months, " + d + " days";
    };
  }]);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/