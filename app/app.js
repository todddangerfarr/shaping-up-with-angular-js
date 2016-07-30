// module
(function(){ // wrapping the function in a closure *good habit
  var app = angular.module('gemStore', ['store-directives']);

  // Store Controller to populate gems variable
  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    $http.get('../assets/js/store-products.json').success(function(data) {
      store.products = data;
    });
  }]);

  // Controller for product reviews
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
