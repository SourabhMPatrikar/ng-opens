var app=angular.module("app",[]);

app.controller("concatController",['$scope', '$log', function($scope,$log){
	$scope.a=10;
	$scope.b=20;
	$scope.concateValue = function(){
		$scope.sum = parseInt($scope.a) + parseInt($scope.b);
		//console.log($scope.sum);
		$log.log($scope.sum);
	};
}]);