﻿var storeApp = angular
    .module('storeApp', ['infinite-scroll', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'chieffancypants.loadingBar', 'gsn.core', 'ui.bootstrap', 'ui.map', 'ui.keypress', 'ui.event', 'ui.utils', 'facebook', 'angulartics'])
    .config(['$routeProvider', function ($routeProvider) {

      var homeFile = gsn.getContentServiceUrl('/meta/' + gsn.config.ChainId + '/?name=home page&meta=home&type=text/html');
      gsn.config.DefaultLayout = gsn.getContentServiceUrl('/meta/' + gsn.config.ChainId + '/?name=home page&meta=template&type=text/html');

      // storeRequired attribute identify route require a store selection
      $routeProvider
          .when('/', {
            templateUrl: homeFile,
            caseInsensitiveMatch: true
          })
          .when('/article', {
            templateUrl: gsn.getThemeUrl('/views/engine/article.html'),
            caseInsensitiveMatch: true
          })
            .when('/careers', {
            templateUrl: gsn.getThemeUrl('/views/engine/employment.html'),
            caseInsensitiveMatch: true
          })
          .when('/changepassword', {
            templateUrl: gsn.getThemeUrl('/views/engine/profile-change-password.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/circular', {
            templateUrl: gsn.getContentUrl('/views/engine/circular-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/circular/flyer', {
            templateUrl: gsn.getContentUrl('/views/engine/circular-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/circular/text', {
            templateUrl: gsn.getContentUrl('/views/engine/circular-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/circular/list', {
            templateUrl: gsn.getContentUrl('/views/engine/circular-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/circular/grid', {
            templateUrl: gsn.getContentUrl('/views/engine/circular-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/contactus', {
            templateUrl: gsn.getContentUrl('/views/engine/contact-us.html'),
            controller: 'ContactUsCtrl',
            caseInsensitiveMatch: true
          })
          .when('/coupons', {
            templateUrl: gsn.getThemeUrl('/views/coupons-view.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/coupons/printable', {
            templateUrl: gsn.getThemeUrl('/views/engine/coupons-printable.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/coupons/digital', {
            templateUrl: gsn.getThemeUrl('/views/engine/coupons-digital.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/coupons/store', {
            templateUrl: gsn.getThemeUrl('/views/engine/coupons-instore.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/mealplannerfull', {
            templateUrl: gsn.getThemeUrl('/views/engine/meal-planner.html'),
            caseInsensitiveMatch: true
          })
          .when('/savedlists', {
            templateUrl: gsn.getThemeUrl('/views/engine/saved-lists.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/mylist', {
            templateUrl: gsn.getThemeUrl('/views/engine/shopping-list.html'),
            caseInsensitiveMatch: true
          })
          .when('/mylist/print', {
            templateUrl: gsn.getThemeUrl('/views/engine/shopping-list-print.html'),
            layout: gsn.getThemeUrl('/views/layout-print.html'),
            caseInsensitiveMatch: true
          })
          .when('/mylist/email', {
            templateUrl: gsn.getThemeUrl('/views/engine/shopping-list-email.html'),
            caseInsensitiveMatch: true
          })
          .when('/emailpreview/registration', {
            templateUrl: gsn.getThemeUrl('/views/email/registration.html'),
            layout: gsn.getThemeUrl('/views/layout-empty.html'),
            caseInsensitiveMatch: true
          })
          .when('/emailpreview/registration-facebook', {
            templateUrl: gsn.getThemeUrl('/views/email/registration-facebook.html'),
            layout: gsn.getThemeUrl('/views/layout-empty.html'),
            caseInsensitiveMatch: true
          })
          .when('/mypantry', {
            templateUrl: gsn.getThemeUrl('/views/engine/my-pantry.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/myrecipes', {
            templateUrl: gsn.getThemeUrl('/views/engine/my-recipes.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/myspecials', {
            templateUrl: gsn.getThemeUrl('/views/engine/my-specials.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/product', {
            templateUrl: gsn.getThemeUrl('/views/engine/product.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/product/search', {
            templateUrl: gsn.getThemeUrl('/views/engine/product-search.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/profile', {
            templateUrl: gsn.getContentUrl('/views/engine/profile-rewardcard.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/profile/rewardcard', {
            templateUrl: gsn.getContentUrl('/views/engine/profile-rewardcard.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
          .when('/profile/updated', {
            templateUrl: gsn.getContentUrl('/views/profile-updated.html'),
            requireLogin: true,
            caseInsensitiveMatch: true
          })
					.when('/profile/rewardcardupdate', {
			      redirectTo: function () {
			        return "/profile/updated";
			      }
			    })
          .when('/recipe', {
            templateUrl: gsn.getThemeUrl('/views/engine/recipe-details.html'),
            caseInsensitiveMatch: true
          })
          .when('/recipe/print', {
            templateUrl: gsn.getThemeUrl('/views/engine/recipe-print.html'),
            layout: gsn.getThemeUrl('/views/layout-print.html'),
            caseInsensitiveMatch: true
          })
          .when('/recipecenter', {
            templateUrl: gsn.getThemeUrl('/views/engine/recipe-center.html'),
            caseInsensitiveMatch: true
          })
          .when('/recipe/search', {
            templateUrl: gsn.getThemeUrl('/views/engine/recipe-search.html'),
            caseInsensitiveMatch: true
          })
          .when('/recipevideo', {
            templateUrl: gsn.getThemeUrl('/views/engine/recipe-video.html'),
            caseInsensitiveMatch: true
          })
          .when('/recoverpassword', {
            templateUrl: gsn.getThemeUrl('/views/engine/recover-password.html'),
            caseInsensitiveMatch: true
          })
          .when('/recoverusername', {
            templateUrl: gsn.getThemeUrl('/views/engine/recover-username.html'),
            caseInsensitiveMatch: true
          })
          .when('/redirect', {
            templateUrl: gsn.getThemeUrl('/views/engine/redirect.html'),
            caseInsensitiveMatch: true
          })
          .when('/registration', {
            templateUrl: gsn.getContentUrl('/views/engine/registration.html'),
            caseInsensitiveMatch: true
          })
          .when('/registration/facebook', {
            templateUrl: gsn.getThemeUrl('/views/engine/registration.html'),
            caseInsensitiveMatch: true
          })
          .when('/search', {
            templateUrl: gsn.getThemeUrl('/views/engine/custom/search.html'),
            caseInsensitiveMatch: true
          })
          .when('/signin', {
            templateUrl: gsn.getThemeUrl('/views/engine/login.html'),
            caseInsensitiveMatch: true
          })
          .when('/specials', {
            templateUrl: gsn.getThemeUrl('/views/engine/specials.html'),
            storeRequired: true,
            caseInsensitiveMatch: true
          })
          .when('/storelocator', {
            templateUrl: gsn.getThemeUrl('/views/engine/store-locator.html'),
            caseInsensitiveMatch: true
          })
          .when('/unsubscribe', {
            templateUrl: gsn.getThemeUrl('/views/engine/unsubscribe.html'),
            caseInsensitiveMatch: true
          })
          .otherwise({
            templateUrl: gsn.getContentUrl('/views/engine/static-content.html'),
            caseInsensitiveMatch: true
          });

    }]);

// ContactUsCtrl
storeApp.controller('ContactUsCtrl', ['$scope', 'gsnProfile', 'gsnApi', '$timeout', 'gsnStore', '$interpolate', '$http', function ($scope, gsnProfile, gsnApi, $timeout, gsnStore, $interpolate, $http) {
  $scope.activate = activate;
  $scope.vm = { PrimaryStoreId: gsnApi.getSelectedStoreId(), ReceiveEmail: true };
  $scope.masterVm = { PrimaryStoreId: gsnApi.getSelectedStoreId(), ReceiveEmail: true };

  $scope.hasSubmitted = false;    // true when user has click the submit button
  $scope.isValidSubmit = true;    // true when result of submit is valid
  $scope.isSubmitting = false;    // true if we're waiting for result from server
  $scope.errorResponse = null;
  $scope.contactSuccess = false;
  $scope.topics = [];
  $scope.topicsByValue = {};
  $scope.storeList = [];
  $scope.captcha = {};
  $scope.storesById = {};

   var template;

  $http.get($scope.getContentUrl('/views/email/contact-us.html'))
    .success(function (response) {
      template = response.replace(/data-ctrl-email-preview/gi, '');
    });

  function activate() {
    gsnStore.getStores().then(function (rsp) {
      $scope.stores = rsp.response;

      // prebuild list base on roundy spec (ﾉωﾉ)
      // make sure that it is order by state, then by name
      $scope.storesById = gsnApi.mapObject($scope.stores, 'StoreId');
    });

    gsnProfile.getProfile().then(function (p) {
      if (p.success) {
        $scope.masterVm = angular.copy(p.response);
        $scope.doReset();
      }
    });

    $scope.topics = gsnApi.groupBy(getData(), 'ParentOption');
    $scope.topicsByValue = gsnApi.mapObject($scope.topics, 'key');
    $scope.parentTopics = $scope.topicsByValue[''];

    delete $scope.topicsByValue[''];
  }

  $scope.getSubTopics = function () {
    return $scope.topicsByValue[$scope.vm.Topic];
  };

  $scope.getFullStateName = function (store) {
    return '=========' + store.LinkState.FullName + '=========';
  };

  $scope.getStoreDisplayName = function (store) {
    return store.StoreName + ' - ' + store.PrimaryAddress + '(#' + store.StoreNumber + ')';
  };

  $scope.doSubmit = function () {
    var payload = $scope.vm;
    if ($scope.myContactUsForm.$valid) {
      payload.CaptchaChallenge = $scope.captcha.challenge;
      payload.CaptchaResponse = $scope.captcha.response;
      payload.Store = $scope.getStoreDisplayName($scope.storesById[payload.PrimaryStoreId]);
      $scope.email = payload;
      payload.EmailMessage = $interpolate(template)($scope);
      // prevent double submit
      if ($scope.isSubmitting) return;

      $scope.hasSubmitted = true;
      $scope.isSubmitting = true;
      $scope.errorResponse = null;
      gsnProfile.sendContactUs(payload)
          .then(function (result) {
            $scope.isSubmitting = false;
            $scope.isValidSubmit = result.success;
            if (result.success) {
              $scope.contactSuccess = true;
            } else if (typeof (result.response) == 'string') {
              $scope.errorResponse = result.response;
            } else {
              $scope.errorResponse = gsnApi.getServiceUnavailableMessage();
            }
          });
    }
  };

  $scope.doReset = function () {
    $scope.vm = angular.copy($scope.masterVm);
    $scope.vm.ConfirmEmail = $scope.vm.Email;
  };

  $scope.activate();
  //#region Internal Methods        
  function getData() {
    return [
        {
          "Value": "Company",
          "Text": "Company",
          "ParentOption": ""
        },
        {
          "Value": "Store",
          "Text": "Store (specify store below)",
          "ParentOption": ""
        },
        {
          "Value": "Other",
          "Text": "Other (specify below)",
          "ParentOption": ""
        },
        {
          "Value": "Employment",
          "Text": "Employment",
          "ParentOption": ""
        },
        {
          "Value": "Website",
          "Text": "Website",
          "ParentOption": ""
        },
        {
          "Value": "Pharmacy",
          "Text": "Pharmacy (specify store below)",
          "ParentOption": ""
        }
    ];
  }
  //#endregion
}]);
