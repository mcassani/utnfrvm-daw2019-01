angular.module('test', []).controller('MainCtrl', function ($scope) {
    $scope.apellido = "García";

    $scope.config = {};
    $scope.config.mostrarInput = false;

    $scope.contactos = [{
        nombre: 'Matias',
        telefono: '123456',
        email: 'yo@mc.com.ar',
        genero : 'm'
    },
    {
        nombre: 'Dama',
        telefono: '45678',
        email: 'aa@mc.com.ar',
        genero : 'f'
    }];


    $scope.mostrarMensaje = function () {
        $scope.nombre = $scope.apellido;
    };

    $scope.agregarElemento = function () {
        $scope.contactos.push({
            nombre: $scope.nombrePersona,
            telefono: '45678',
            email: 'aa@mc.com.ar',
            genero : 'f'
        });
        $scope.nombrePersona = undefined;
    };
    

});
