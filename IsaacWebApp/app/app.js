angular.module("App", [
    'ngMaterial'
])
.controller('mainController', function($scope){
    $scope.hi = "Hello World";
});