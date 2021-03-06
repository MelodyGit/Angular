'use strict';

/* Services */

var guthubservices = angular.module('guthubservices',['ngResource']);

guthubservices.factory('Recipe',['$resource',
	function($resource) {
		return $resource('recipes/:id',{id:'@id'});
	}
]);

guthubservices.factory('MultiRecipeLoader',['Recipe','$q',
	function(Recipe,$q) {
		return function() {
			var delay = $q.defer();
			Recipe.query(function(recipes) {
				delay.resolve(recipes);
			},function() {
				delay.reject('Unable to fetch recipes');
			});
			return delay.promise;
		};
	}
]);

guthubservices.factory('RecipeLoader',['Recipe','$route','$q',
	function(Recipe,$route,$q) {
		return function() {
			var delay = $q.defer();
			Recipe.get({id: $route.current.params.recipeId},function(recipe) {
				delay.resolve(recipe);
			},function() {
				delay.reject('Unable to fetch recipe' + $route.current.params.recipeId);
			});
			return delay.promise;
		};
	}
]);