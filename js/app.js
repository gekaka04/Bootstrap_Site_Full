var pageBtns = angular.module('pageBtns',[ 'mgcrea.ngStrap' ]);
pageBtns.factory('gettingData', ['$http', function($http){
	return{
		getArray: function(){
			var promise = $http.get('/topics.json');
			return promise;
		}
	}
}]);
pageBtns.controller('showArrayCtrl', ['$scope', 'gettingData', '$templateCache', function($scope, gettingData, $templateCache){

	var topicIndex=0;

	gettingData.getArray().success(function(array)
	{
		console.log(array);
		$scope.topic=array[topicIndex];
		$scope.topics=array;
		console.log(array[topicIndex]);
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
	'use strict';
	$scope.multiplePanels = {
    	activePanels: [0],
    	allowMultiple:false
  	};

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

