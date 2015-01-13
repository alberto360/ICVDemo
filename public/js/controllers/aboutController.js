	icvApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	icvApp.service('loginService', function(){
	this.loginUser='';
    this.addLogon= function(username){
        this.loginUser=username;
    };        
    this.getLogon = function(){
        return this.loginUser;
    };   
});