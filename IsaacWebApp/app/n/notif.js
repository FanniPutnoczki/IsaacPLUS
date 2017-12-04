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
    controller: NewNotificationController
})

.component('notificatoinsOverview', {
    templateUrl: 'n/notifOverview.html',
    controller: NotificationsOverviewController
})

function NewNotificationController(){

}

function NotificationsOverviewController(){

}