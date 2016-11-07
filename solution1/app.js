(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.message = "";

  $scope.checkIt = function () {

	if ($scope.message === "")
	{
		$scope.result = "Please enter data first!";
	}
	else {
		 var arrayOfStrings = $scope.message.split(',');
		 if (arrayOfStrings.length > 3){
	     $scope.result = "Too much!"; 
		 }
		 else {
		 $scope.result = "Enjoy!";
		 }
	}

  };
}

} )();