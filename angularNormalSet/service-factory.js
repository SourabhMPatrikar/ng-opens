var app = angular.module("app",[]);

app.controller('employee',['$scope', 'calcFactoryService',function($scope, calcFactoryService){
	$scope.a=20;
	$scope.b=30;

	$scope.performSum = function(){
		$scope.sum = calcFactoryService.getSum($scope.a, $scope.b);
	};
}]);

app.factory('calcFactoryService',['$log',function($log){
	$log.log("instantiate calcFactoryService");
	var objCalcFactory ={}
	objCalcFactory.getSum = function(a,b){
		return parseInt(a)+parseInt(b);
	};
	return objCalcFactory;
}]);