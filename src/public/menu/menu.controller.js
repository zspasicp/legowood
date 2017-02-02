(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);


function MenuController() {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
