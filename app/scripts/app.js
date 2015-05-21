'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
angular
    .module('webApp', [
        /*'ngAnimate',*/
        /*'ngAria',*/
        /*'ngCookies',*/
        /*'ngMessages',*/
        /*'ngResource',*/
        'ngRoute',
        /*'ngSanitize',*/
        /*'ngTouch'*/
    ])
    .config(function($routeProvider) {
        $routeProvider
            .
        when('/inicio', {
            templateUrl: 'views/inicio.html'
                /*,
                                  controller: 'InicioCtrl as inicio'*/
        }).
        when('/carta', {
            templateUrl: 'views/carta.html',
            controller: 'CartaCtrl as carta'
        }).
        when('/menus', {
            templateUrl: 'views/menus.html'
                /*,
                                  controller: 'MenusCtrl as menus'*/
        }).
        when('/galeria', {
            templateUrl: 'views/galeria.html'
                /*,
                                  controller: 'GaleriaCtrl as galeria'*/
        }).
        when('/reservas', {
            templateUrl: 'views/reservas.html'
                /*,
                                  controller: 'ReservasCtrl as reservas'*/
        }).
        when('/contacto', {
            templateUrl: 'views/contacto.html'
                /*,
                                  controller: 'ContactoCtrl as contacto'*/
        }).
        otherwise({
            redirectTo: '/inicio'
        });
    });
