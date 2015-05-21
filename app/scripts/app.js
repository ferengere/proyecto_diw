'use strict';

(function() {
    var app = angular.module('WebApp', ['ngRoute']);

    app.config(['$routeProvider' ,function($routeProvider) {
            $routeProvider.
               when('/inicio', {
                  templateUrl: 'views/inicio.html',
                  controller: 'InicioCtrl as inicio'
               }).
               when('/carta', {
                  templateUrl: 'views/carta.html',
                  controller: 'CartaCtrl as carta'
               }).
               when('/menus', {
                  templateUrl: 'views/menus.html',
                  controller: 'MenusCtrl as menus'
               }).
               when('/galeria', {
                  templateUrl: 'views/galeria.html',
                  controller: 'GaleriaCtrl as galeria'
               }).
               when('/reservas', {
                  templateUrl: 'views/reservas.html',
                  controller: 'ReservasCtrl as reservas'
               }).
               when('/contacto', {
                  templateUrl: 'views/contacto.html',
                  controller: 'ContactoCtrl as contacto'
               }).
               otherwise({
                  redirectTo: '/inicio'
               });
        }]);

app.controller('InicioCtrl', function(){});


    app.controller('CartaCtrl', ['$http', function($http) {
        var self = this;
        this.platos = [];
        $http.get('data/data.json').success(function(data) {
            self.platos = data;
            //console.log('platos: ' + this.platos);
        });

    }]);
    app.controller('MenusCtrl', function(){});
    app.controller('GaleriaCtrl', function(){});
    app.controller('ReservasCtrl', function(){});
    app.controller('ContactoCtrl', function(){});

    app.service();



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
