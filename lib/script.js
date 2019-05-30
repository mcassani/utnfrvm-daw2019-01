angular.module('test', []).controller('MainCtrl', function ($scope) {
    $scope.apellido = "García";

    $scope.mostrarMensaje = function () {
        $scope.nombre = $scope.apellido;
    };


});
