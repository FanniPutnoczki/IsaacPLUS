angular.module("App", [
    'ngMaterial',
    'ngRoute'
])
.controller('mainController', function($scope, $routeProvider){
    $scope.hi = "Hello World";
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html'
        })
        .when('/notifications', {
            templateUrl: 'notifications/notif.html'
        })
        .when('/skills', {
            templateUrl: 'skills/skills.html'
        });
});