var app = angular.module("app",[]);

app.controller("sumController",['$scope','$log','calcProviderService',function($scope, $log, calcProviderService){
	$log.log("SumByNumerics controller has been instantiated...");
	$scope.fValue = 25;
	$scope.sValue = 25;
	$scope.performSum = function(){
		$scope.sum = calcProviderService.getSumValue($scope.fValue, $scope.sValue);
	};
}]);

app.provider('calcProviderService',function(){
	this.$get = ['$log',function($log){
	$log.log('calcProviderService instantiated...')
		var objProvider = {};
		objProvider.getSumValue = function(a,b){
			return parseInt(a) + parseInt(b);
		};
		return objProvider;
	}];
});

app.config(["calcProviderServiceProvider",function(calcProviderService){

}]);