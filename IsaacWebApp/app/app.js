app = angular.module("App", [
    'ui.router',
    'ngMaterial',
    'notifications'
])
.controller('mainController', function($scope){
    $scope.hi = "Hello World";
})
.config(function($stateProvider){
    $stateProvider
    .state('dashboard', {
        url: "/dashboard",
        component:  'dashboard'
    })
    .state('skills', {
        url: '/skills',
        component: 'skills'
    });
});