(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = [];


  service.getMenuItems = [];


  service.getMenuItems = function (shortName) {
    return [];
  }


  service.getCategory = function (shortName) {
    return [];
  };


  service.getMenuItem = function(shortName) {
    return [];
  };


  service.saveMenuItem = function (menuItem) {
    return [];
  };

}



})();
