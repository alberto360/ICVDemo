	icvApp.controller('guestController', function($scope, $timeout) {
		var status={
			pass:'ok',
			fail:'remove'
		};
	    console.log('message WOrking')
	    $scope.icvForm={};

	    $scope.today = function() {
	        $scope.icvForm.date = new Date();
	    };
	    $scope.today();

	    $scope.clear = function() {
	        $scope.icvForm.date = null;
	    };

	    // Disable weekend selection
	    $scope.disabled = function(date, mode) {
	        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
	    };

	    $scope.toggleMin = function() {
	        $scope.minDate = $scope.minDate ? null : new Date();
	    };
	    $scope.toggleMin();

	    $scope.open = function($event) {
	        console.log('oopeend')
	        $event.preventDefault();
	        $event.stopPropagation();

	        $scope.opened = true;
	    };

	    $scope.dateOptions = {
	        formatYear: 'yy',
	        startingDay: 1
	    };

	    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	    $scope.format = $scope.formats[0];
	    //////////////////////////////////////////////////////////////////////////////////////
		$scope.myInterval = 0;
		var slides = $scope.slides = [];
		$scope.addSlide = function() {
		  var newWidth = 600 + slides.length + 1;
		  slides.push({
		  	  title: 'testo',
		      image: 'http://placekitten.com/' + newWidth + '/300',
		      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4],
		      status: status.pass
		  });
		};

		// for (var i = 0; i < 4; i++) {
		//   $scope.addSlide();
		// }
		$scope.submitGuest=function(data){
			var switchMe =true;
			$scope.myInterval = 100;
			angular.forEach(slides, function(value, key){
				console.log(value)
				console.log(data)
				if(value.title===data.email&&value.text==data.date)
				{
					console.log('FALSE')
					switchMe=false;
					
				}
			});
			if(switchMe){
				slides.push({
				title: data.email,
		      	text: data.date,
		      	status: status.pass,
		      	message: 'has been invited'
		      });
			}
			else{
				slides.push({
				title: data.email,
		      	text: data.date,
		      	status: status.fail,
		      	message: 'is already invited'
		      });
			}
			
				
			
			
		
			$timeout( function(){ 
				$scope.myInterval = 0;
				console.log("switch")
			 }, 200);
			$scope.icvForm.email='';
			$scope.icvForm.name='';
			return true;
		}
	});