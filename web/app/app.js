'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    // 'oc.lazyLoad',
    'myApp.brand',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/view2'});

    // $ocLazyLoadProvider.config({debug: true, events: true, modules: [
    //         {name: 'brand', files: ['business/brand/brandCtrl.js']}]});

}]);


