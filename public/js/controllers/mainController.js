	// create the controller and inject Angular's $scope
	icvApp.controller('mainController', function($scope,loginService,$location) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.submitGuest = function(data){
			// console.log(data)
			// loginService.addLogon(data.email);
			// console.log(loginService.loginUser)
			$location.url('addguest/');
		};
	});












	icvApp.directive('myDialog', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    template: '<div ng-transclude></div>',
    link: function (scope, element, loginService) {
      scope.name = loginService.loginUser;
      scope.$watch('name', function() {
        	console.log("YAYAYSADASD");
    }, true);
    }
  };
});