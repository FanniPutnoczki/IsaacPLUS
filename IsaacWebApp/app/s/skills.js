angular.module('skills', [
    'ui.router'
]).config(function($stateProvider){
    
        $stateProvider
        .state('skills', {
            url: '/skills',
            component: 'skills',
        });
    
}).component('skills', {
   
    templateUrl: 's/skills.html',
    controller: SkillsController,
    controllerAs: 'vm',

}).service('skillsService', function(){
    
    return {
        'get': get,
        'enable': enable
    };

    function get(){
        return "haha"
    }

    function enable(name){

    }

});

function SkillsController(skillsService, $scope){
    this.$onInit = function() {
        $scope.skills = skillsService.get();
    };
}
