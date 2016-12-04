(function(){
    function HomeCtrl(){
        this.title = "Peacock Artistry";
    }
    
    angular
        .module('pArtistry')
        .controller('HomeCtrl', HomeCtrl);
})();