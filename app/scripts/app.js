'use strict';

(function() {
    var app = angular.module('WebApp', []);

    app.controller('CartaCtrl', ['$http', function($http) {
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

    /*app.controller('CartaCtrl', ['PlatosService', function(PlatosService) {
        this.platos = PlatosService;

        console.log(this.platos.entrantes);
    }]);*/

})();

//")]}',\n" 

/*var entrantes = [{
    nombre: 'Ensalada de atún',
    descripcion: 'plato1',
    precio: '5',
    th: '../images/ens-de-atun-100x100.jpg',
    imgSm: '',
    imgLg: ''
}, {
    nombre: 'Ensalada de atún',
    descripcion: 'plato1',
    precio: '5',
    th: '../images/ens-de-atun-150x150.jpg',
    imgSm: '',
    imgLg: ''
}, {
    nombre: 'Ensalada de atún',
    descripcion: 'plato1',
    precio: '5',
    th: '../images/ens-de-atun-150x150.jpg',
    imgSm: '',
    imgLg: ''
}, {
    nombre: 'Ensalada de atún',
    descripcion: 'plato1',
    precio: '5',
    th: '../images/ens-de-atun-150x150.jpg',
    imgSm: '',
    imgLg: ''
}, {
    nombre: 'Ensalada de atún',
    descripcion: 'plato1',
    precio: '5',
    th: '../images/ens-de-atun-150x150.jpg',
    imgSm: '',
    imgLg: ''
}];*/
