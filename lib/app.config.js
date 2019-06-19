var app = angular.module('test');
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/inicio.html"
        })
        .when("/red", {
            controller: 'RedCtrl',
            templateUrl: "pages/red.html"
        })
        .when("/red/:id", {
            controller: 'RedCtrl',
            templateUrl: "pages/red.html"
        })
        .when("/contactos", {
            controller: 'MainCtrl',
            templateUrl: "pages/contactos.html"
        })
        .when("/contactos/:id", {
            controller: 'MainCtrl',
            templateUrl: "pages/contactos.html"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        })
        .otherwise({
            redirectTo: '/'
        });
});