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
        return $.get(config.host+"/api/skills/get");
    }

    function enable(name){
        $.get(config.host+"/api/skills/enable/" + name);
    }

});

function SkillsController(skillsService, $scope){

    var vm = this;

    vm.$onInit = getSkills;
    vm.switchSkills = switchSkills;

    function getSkills() {
        skillsService.get().done(function(skills){
            $scope.skills = JSON.parse(skills);
            console.log(skills);
            $scope.$apply();
            $scope.$digest();
        });
    };

    function switchSkills(name){
        skillsService.enable(name);
    }

}
