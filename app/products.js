// AN ANGULAR MODULE for product directives
(function() {
  var app = angular.module('store-directives', []);

  // TEMPLATE DIRECTIVES
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-gallery.html",
      controller: ('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(value) {
          if (value) {
            this.current = value;
          } else {
            this.current = 0;
          }
        };
      }),
      controllerAs: 'gallery'
    };
  });

  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-tabs.html",
      controller: ('TabController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      }),
      controllerAs: "tab"
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-title.html"
    }
  });

  app.directive('productSpecs', function(){
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-specs.html"
    }
  });

  app.directive('productReviews', function(){
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-reviews.html"
    }
  });

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: "app/components/store/product-description.html"
    }
  });

})();
