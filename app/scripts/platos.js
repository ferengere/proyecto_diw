(function() {
    var app = angular.module('AppPlatos', []);

    app.controller('PlatosCtrl', ['$http', function($http) {
        var self = this;
        this.platos = [];
        $http.get('data/data.json').success(function(data) {
            self.platos = data;
            //console.log('platos: ' + this.platos);
        });

    }]);



    /*app.service('PlatosService', ['$http', function($http) {
        //var self = this;

        $http.get('data/data.json').success(function(data) {
            //self.platos = data;
            //console.log('platos: ' + this.platos);
            return data;
        });


    }]);*/


})();
