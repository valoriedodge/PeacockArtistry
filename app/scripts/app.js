(function() {
 function config($stateProvider, $locationProvider) {
     $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
     
     $stateProvider
         .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
             templateUrl: '/templates/home.html'
         });
//        .state('collection', {
//             url: '/collection',
//             controller: 'CollectionCtrl as collection',
//             templateUrl: '/templates/collection.html'
//         })
//         .state('album', {
//             url: '/album',
//             controller: 'AlbumCtrl as album',
//             templateUrl: '/templates/album.html'
//         });
 }

 angular
     .module('pArtistry', ['ui.router'])
     .config(config);
})();