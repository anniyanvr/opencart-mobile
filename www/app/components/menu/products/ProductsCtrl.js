'use strict';
(function () {
	var app = angular.module('ProductsCtrl', ['ui.router']);
	
	app.controller('ProductsController', function ($scope, ShopService, CartService, $timeout) {
		$scope.restaurantName = ShopService.restaurantName;
		$scope.menuProducts = ShopService.products;
		$scope.productInfo = ShopService.productInfo;

		$scope.url = ShopService.url;
		$scope.badgeTest = CartService.showTotal();
		$scope.addedToCart = true;

		ShopService.cacheImages();

		// go to product details and initialize required modifiers
		$scope.goToDetails = function (product) {
			ShopService.cacheImages();
			$scope.productInfo = product;
			$scope.productInfo.quantity = 0;
			ShopService.productTotal = 0;
			ShopService.productInfo = product;
			ShopService.productInfo.modifiers = ShopService.modifiers;

			var modifiers = ShopService.productInfo.modifiers;

			for (var i = 0; i < modifiers.length; i++) {
				for (var j = 0; j < modifiers[i].modifierElement.length; j++)
					if (modifiers[i].validation === 'required') {
						if (j === 0)
							modifiers[i].modifierElement[j].checked = true;
						else
							modifiers[i].modifierElement[j].checked = false;
					}
					else
						modifiers[i].modifierElement[j].checked = false;
			}
		};

		//filter for product status
		$scope.filterStatus = function (product) {
			return product.productStatus === "true";
		};
	});
})();