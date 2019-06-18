var app = angular.module('test');
app.controller('MainCtrl', function ($scope, $http) {
    $scope.apellido = "García";

    $scope.config = {};
    $scope.config.mostrarInput = false;
    $http.get('https://reqres.in/api/users').then(function (respuesta) {
        $scope.contactos = respuesta.data.data;
    });
    $scope.contactos = [{
        nombre: 'Matias',
        telefono: '123456',
        email: 'Yo@mc.com.ar',
        genero: 'm',
        saldo: 789.89,
        fechaNacimiento: new Date()
    },
    {
        nombre: 'Dama',
        telefono: '45678',
        email: 'aa@mc.com.ar',
        genero: 'f',
        saldo: 1790.8999,
        fechaNacimiento: new Date()
    }];


    $scope.mostrarMensaje = function () {
        $scope.nombre = $scope.apellido;
    };

    $scope.agregarElemento = function () {
        $scope.contactos.push({
            nombre: $scope.nombrePersona,
            telefono: '45678',
            email: 'aa@mc.com.ar',
            genero: 'f'
        });
        $scope.nombrePersona = undefined;
    };


});