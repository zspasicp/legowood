(function(){
  'use strict';

  angular.module('LegowoodModule')
  .component('aboutPage', {
    templateUrl: './src/about/about.template.html',
    controller: AboutPageController,
    controllerAs: '$ctrl',
    bindings:{}
  });

  AboutPageController.$inject = [];

  function AboutPageController(){
    var $ctrl = this;
  }
})();
