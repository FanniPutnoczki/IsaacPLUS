angular.module('notifications', [
    'ui.router'
])

.config(function($stateProvider){

    $stateProvider
    .state('notificationsOverview', {
        url: '/notifications',
        component: 'notificatoinsOverview',
    })
    .state('newNotification', {
        url: '/notifications/new',
        component: 'newNotification'
    })

})

.component('newNotification', {
    templateUrl: 'n/newNotif.html',
    controller: NewNotificationController,
    controllerAs: 'vm'
})

.component('notificatoinsOverview', {
    templateUrl: 'n/notifOverview.html',
    controller: NotificationsOverviewController,
    controllerAs: 'vm',
})

.service('notificationsService', function(){
    return {
        'add': add,
        'get': get,
        'remove': remove
    }

    function remove(name){
        $.get(config.host + '/api/notifications/remove/'+name);
    }

    function get(){
        return $.get(config.host + '/api/notifications/get');
    }

    function add(notif){
        $.post(config.host + '/api/notifications/add', notif, function(){}, 'json');
    }

});

function NewNotificationController($scope){
    var vm = this;
    vm.submit = submit;

    function submit() {
        
        var notif = {}
        if ($scope.notif.recurring) {
            notif = {
                "date": null,
                "time": $scope.notif.time,
                "enabled": true,
                "message": $scope.notif.message,
                "task": $scope.notif.task,
                "days": $scope.notif.days,
            }
        } else {
            notif = {
                "date": $scope.notif.date,
                "time": $scope.notif.time,
                "enabled": true,
                "message": $scope.notif.message,
                "task": $scope.notif.task,
                "days": null,
            }
        }
        $.post(config.host + '/api/notifications/add', notif, function(){}, 'json');
        alert('submitted');
    }

}

function NotificationsOverviewController($interval, $scope, notificationsService){

    var vm = this;

    vm.$onInit = getNotifs;
    
    function getNotifs() {
        notificationsService.get().done(function(notifs){
            $scope.notifs = JSON.parse(notifs);
            $scope.$apply();
        });
    };

    //$interval(function () {
    //    getNotifs();
    //}, 3000);

}