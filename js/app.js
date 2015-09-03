var pageBtns = angular.module('pageBtns',['ui.bootstrap']);
pageBtns.factory('gettingData', ['$http', function($http){
	return{
		getArray: function(){
			var promise = $http.get('/topics.json');
			return promise;
		}
	}
}]);
pageBtns.controller('showArrayCtrl', ['$scope', 'gettingData', function($scope, gettingData){

	var topicIndex=0;

	gettingData.getArray().success(function(array)
	{
		$scope.topic=array[topicIndex];
		$scope.topics=array;
	});

	$scope.nextTopic = function (){
		topicIndex++;
		if (topicIndex>$scope.topics.length-1){
			topicIndex=0;
		}
		$scope.topic=$scope.topics[topicIndex];
	}

	$scope.prevTopic = function (){
		topicIndex--;
		if (topicIndex<0){
			topicIndex=$scope.topics.length-1;
		}
		$scope.topic=$scope.topics[topicIndex];
	}

	/*ACCORDION UI-BOOTSTRAP AngularJS+BOOTSTRAP*/
	$scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  	};
  	$scope.oneAtATime = true;

  	/*CAROUSEL UI-BOOTSTRAP AngularJS+BOOTSTRAP*/
  	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [];
	$scope.addSlide = function(i) {
	    slides.push({
	    	image: '../images/nature'+i+'.jpg',
	    	text: ['First Slide','Second Slide','Third Slide'][slides.length % 3] + ' ' +
	        ['1', '2', '3'][slides.length % 3]
	    });
	  };
	for (var i=0; i<3; i++) {
		$scope.addSlide(i+1);
	}
}]);

