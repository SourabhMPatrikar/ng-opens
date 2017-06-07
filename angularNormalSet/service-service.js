var app = angular.module("app",[]);

app.controller("sumController",['$scope','$log','calcServiceService',function($scope,$log,calcServiceService){
	$log.log("sumController controller has been instantiated...");
	$scope.fValue = 25;
	$scope.sValue = 25;
	$scope.performSum = function(){
		$scope.sum = calcServiceService.getSumValue($scope.fValue, $scope.sValue);
	};
}]);

app.service("calcServiceService",['$log',function($log){
	$log.log("Service based service instantiated...");
	this.getSumValue = function(a,b){
		return parseInt(a)+parseInt(b);
	};
}]);