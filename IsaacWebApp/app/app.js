app = angular.module("App", [
    'ui.router',
    'ngMaterial',
    'notifications',
    'skills'
])
.controller('mainController', function($scope){
    $scope.hi = "Hello World";
})
.config(function($stateProvider){
    $stateProvider
    .state('dashboard', {
        url: "/dashboard",
        component:  'dashboard'
    });
});