'use strict';
(function () {
	var app = angular.module('TapitooPortal', ['ionic',
											   'app.routes',
											   'app.config',
											   'Tapitoo.StartUpService',
											   'Tapitoo.ShopService',
											   'Tapitoo.GeocoderService',
											   'Tapitoo.DeliveryInfoService',
											   'Tapitoo.CartService',
											   'Tapitoo.LocationServices',
											   'Tapitoo.googleMap',
											   'Tapitoo.filterModifiers',
											   'Tapitoo.HomeViewController',
											   'HomeCtrl',
											   'DeliveryCtrl',
											   'CategoriesCtrl',
											   'ProductsCtrl',
											   'ProductsDetailsCtrl',
											   'CartCtrl',
											   'OrderHistoryCtrl',
											   'DeliveryInformationCtrl',
											   'AddressListCtrl',
											   'PersonalInfoCtrl',
											   'GoodbyeCtrl',
											   'ngStorage',
											   'ngCordova',
											   'ion-google-place',
											   'cordova',
											   'ionic.ion.imageCacheFactory',
											   'ionic.ion.headerShrink',
											   'pascalprecht.translate']);

	app.run(function (StartUpService) {
		StartUpService.initialization;
	});


	app.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {
		//routes fallback
		$urlRouterProvider.otherwise("/drawer/home");

		$ionicConfigProvider.views.transition('ios');
		$ionicConfigProvider.navBar.alignTitle('center')

		// configures staticFilesLoader
		$translateProvider.useStaticFilesLoader({
			prefix: 'languages/translate-',
			suffix: '.json'
		});
		// load 'en' table on startup
		$translateProvider.preferredLanguage('en');
	});

	app.controller('AppInitController', function ($scope, $state,ShopService, $ionicScrollDelegate, $timeout, $ionicSideMenuDelegate) {

		$scope.$on('locationLoaded', function (event, loc) {
			$timeout(function () {
				$scope.loc = loc;
			}, 0, false);
		});
		$scope.toggleDrawer = function () {
			$ionicSideMenuDelegate.toggleLeft();
		};
	});
})();

angular.element(document).ready(function () {
	angular.bootstrap(document, ['TapitooPortal']);
});