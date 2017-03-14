(function(){
  'use strict';

  angular.module('LegowoodModule')
  .component('mainPage', {
    templateUrl: './src/main/main.template.html',
    controller: MainPageController,
    controllerAs: '$ctrl',
    bindings:{}
  });

  MainPageController.$inject = [];

  function MainPageController(){
    var $ctrl = this;

    $ctrl.images=['images/galerija2.jpg', 'images/galerija3.jpg', 'images/galerija4.jpg']
  }
})();
