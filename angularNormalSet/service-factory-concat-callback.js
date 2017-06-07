var app = angular.module("app",[]);

app.controller("employee",['$scope','calcFactoryServiceCallBack',function($scope, calcFactoryServiceCallBack){
	$scope.a = 15;
	$scope.b = 15;
	$scope.doSum = function(){
		calcFactoryServiceCallBack.getSum($scope.a,$scope.b,function(r){
			$scope.sum = r;
		});
	};
}]);

app.factory("calcFactoryServiceCallBack",['$log',function($log){
	$log.log("Factory Service with CallBack Instantiated...");
	var objCalcService = {};

	objCalcService.getSum = function(a,b,cb){
		var sumOfValue = parseInt(a)+parseInt(b);
		$log.log("sumOfValue is = " + sumOfValue);
		cb(sumOfValue);
	};

	return objCalcService;
}]);
