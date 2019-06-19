var app = angular.module('test');
app.factory('Contacto', function ($resource) {

    var Contacto = $resource('https://reqres.in/api/users/:id',
        { id: '@id' });
    return Contacto;
});