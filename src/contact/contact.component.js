(function(){
  'use strict';

  angular.module('LegowoodModule')
  .component('contactPage', {
    templateUrl: './src/contact/contact.template.html',
    controller: ContactPageController,
    controllerAs: '$ctrl',
    bindings:{}
  });

  ContactPageController.$inject = [];

  function ContactPageController(){
    var $ctrl = this;
  }
})();
