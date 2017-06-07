var app = angular.module("app",[]);

app.controller("sumController",['$scope','$log','calcServiceServiceCallBack',function($scope, $log, calcServiceServiceCallBack){
	$log.log("sumController controller has been instantiated call back...");
	$scope.fValue = 30;
	$scope.sValue = 40;

	$scope.performSum = function(){
		calcServiceServiceCallBack.getSumValue($scope.fValue, $scope.sValue, function(r){
			$scope.sum = r; 
		});
	}
}]);

app.service("calcServiceServiceCallBack",['$log',function($log){
	$log.log("Service based service instantiated with call back...");
		this.getSumValue = function(a, b, cb){
			var sumOfValue = parseInt(a)+parseInt(b);
			cb(sumOfValue);
		};
}]);