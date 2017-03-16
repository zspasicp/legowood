(function(){
  'use strict';

  angular.module('LegowoodModule')
  .component('galleryPage', {
    templateUrl: './src/gallery/gallery.template.html',
    controller: GalleryPageController,
    controllerAs: '$ctrl',
    bindings:{}
  });

  GalleryPageController.$inject = [];

  function GalleryPageController(){
    var $ctrl = this;
    $ctrl.images = ['images/galerija.jpg',
    'images/galerija2.jpg',
    'images/galerija3.jpg',
    'images/galerija4.jpg',
    'images/galerija5.jpg',
    'images/galerija6.jpg',
    'images/galerija7.jpg',
    'images/galerija8.jpg',
    'images/galerija9.jpg',];
  }
})();
