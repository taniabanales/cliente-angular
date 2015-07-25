/*Primero creamos un módulo, el cual es una aplicación de AngularJs*/

var aplicacion = angular.module('aplicacioncita', []);

/*Definimos un controlador para comunicarnos con Index.html*/

aplicacion.controller('controladorPrincipal', function ($scope, $http) {
    /*Creamos un modelo simple*/
    $scope.mensajito = 'Hola desde angular';
    $scope.nombre = '';
    $scope.algo = '';
    $scope.farenheit = 0;
    $scope.kelvin = 0;
    $scope.centigrados = 0;
    $scope.apuchurrame = function () {
        $scope.algo = 'Haz apuchurrado el botón';
    };
    
    $scope.guardarProducto=function(){
        //ENviamos la informacion a traves de REST
        $http.delete('http://localhost:8080/producto/2').success(function(datos){
            console.log(datos);
        });
    };
    
});



    
    
   /* $scope.conversion = function () {
        $scope.farenheit = (($scope.centigrados * 1.8)+32);
        $scope.kelvin = (($scope.centigrados * 1) + 273.73);
    };
    $scope.guardarProducto = function (){
        /*Envíamos información a través de REST
        $http.post('http://localhost:8080/producto/pinguinos/10/25').success(function(datos)){
            console.log(datos);
        }
    }*/
});