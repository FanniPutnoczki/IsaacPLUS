angular.module('notifications', [
    'ui.router'
])

.config(function($stateProvider){

    $stateProvider
    .state('notificationsOverview', {
        url: '/notifications',
        component: 'notificatoinsOverview'
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
    controller: NotificationsOverviewController
})

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

function NotificationsOverviewController(){

}