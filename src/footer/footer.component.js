(function(){
  'use strict';

  angular.module('LegowoodModule')
  .component('ngFooter', {
    templateUrl: './src/footer/footer.template.html',
    controller: FooterController,
    controllerAs: '$ctrl',
    bindings:{}
  });

  FooterController.$inject = [];

  function FooterController(){
    var $ctrl = this;
  }
})();
