var app = angular.module('app',[]);

app.controller("sumController", ['$scope', '$log', 'calcProviderService', function($scope, $log, calcProviderService){
	$log.log("sumController has been instantiated...");
	$scope.fValue = 30;
	$scope.sValue = 40;
	$scope.performSum = function(){
		calcProviderService.getSumValue($scope.fValue, $scope.sValue, function(r){
			$scope.sum = r;
		});
	};
}]);

app.provider("calcProviderService", function(){
	this.$get = ['$log', function($log){
		$log.log("calcProviderService has been instantiated...");
		var objProvider = {};
		objProvider.getSumValue = function(a,b,cb){
			var s = parseInt(a) + parseInt(b);
			cb(s);
		}
		return objProvider;
	}];
});

// app.config("calcProviderServiceProvider",function(){

// });