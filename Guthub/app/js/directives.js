'use strict';

/* Directives */
var guthubdirectives = angular.module('guthubdirectives',[]);

guthubdirectives.directive('butterbar',['$rootScope',
	function($rootScope) {
		return {
			link:function(scope,element,attrs) {
				element.addClass('hide');

				$rootScope.$on('$routeChangeSuccess',function() {
					element.removeClass('hide');
				});

				$rootScope.$on('$routeChangeSuccess',function() {
					element.addClass('hide');
				});
			}
		};
	}
]);

guthubdirectives.directive('focus',
	function() {
		return {
			link:function(scope,element,attrs) {
				element[0].focus();
			}
		};
	}
);