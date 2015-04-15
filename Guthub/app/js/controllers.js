'use strict';

/* Controllers */

var guthubControllers = angular.module('guthubControllers', []);

guthubControllers.controller('ListCtrl',['$scope','recipes',function($scope,recipes) {
	$scope.recipes = recipes;  //自定义的服务recipes
}]);

guthubControllers.controller('ViewCtrl',['$scope','$location','recipe',
	function($scope,$location,recipe) {
		$scope.recipe = recipe;

		$scope.edit = function() {
			$location.path('/edit/' + recipe.id);
		};
	}
]);

guthubControllers.controller('EditCtrl',['$scope','$location','recipe',
	function($scope,$location,recipe) {
		$scope.recipe = recipe;

		$scope.save = function() {
			$scope.recipe.$save(function(recipe) {
				$location.path('/view/' + recipe.id);
			});
		};

		$scope.remove = function() {
			delete $scope.recipe;
			$location.path('/');
		};
	}
]);

guthubControllers.controller = ('NewCtrl',['$scope','$location','Recipe',
	function($scope,$location,Recipe) {
		$scope.recipe = new Recipe({
			ingredients:[{}]
		});

		$scope.save = function() {
			$scope.recipe.$save(function(recipe) {
				$location.path('/view/' + recipe.id);
			});
		};
	}
]);