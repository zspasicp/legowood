(function() {
    'use strict';

    angular.module('LegowoodModule', ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "../index.html"
                })
                .when("/index", {
                    templateUrl: "../index.html"
                });
        })
        .controller('MainStateController', MainStateController);

    MainStateController.$inject = [];

    function MainStateController() {
        var $ctrl = this;

        $ctrl.mainVisible = true;
        $ctrl.aboutVisible = false;
        $ctrl.galeryVisible = false;
        $ctrl.contactVisible = false;

        $ctrl.showAboutPage = function() {
          $ctrl.mainVisible = false;
          $ctrl.aboutVisible = true;
          $ctrl.galeryVisible = false;
          $ctrl.contactVisible = false;
        };

        $ctrl.showMainPage = function() {
          $ctrl.mainVisible = true;
          $ctrl.aboutVisible = false;
          $ctrl.galeryVisible = false;
          $ctrl.contactVisible = false;
        };

        $ctrl.showGaleryPage = function() {
          $ctrl.mainVisible = false;
          $ctrl.aboutVisible = false;
          $ctrl.galeryVisible = true;
          $ctrl.contactVisible = false;
        };

      $ctrl.showContactPage = function() {
          $ctrl.mainVisible = false;
          $ctrl.aboutVisible = false;
          $ctrl.galeryVisible = false;
          $ctrl.contactVisible = true;
        };
    }
})();
