var app = angular.module('test');
app.controller('RedCtrl', function ($scope, $routeParams) {
    console.log($routeParams.id);
});
