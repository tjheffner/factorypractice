Restaurant.controller('PizzaCtrl', function PizzaCtrl($scope, RestaurantFactory) {
  $scope.pizzas = [];
  $scope.RestaurantFactory = RestaurantFactory;
  $scope.pizzaSize = "medium";

  $scope.addPizza = function() {

    var pizzaPrice = {'slice': 2, 'small': 10, 'medium': 12, 'large': 14};

    $scope.pizzas.push({size: $scope.pizzaSize, price: pizzaPrice[$scope.pizzaSize] });
  };

  $scope.pizzaPrice = function() {

    return $scope.RestaurantFactory.calcPrice($scope.pizzas);
  };

  $scope.deletePizza = function(pizza) {
    var index = $scope.pizzas.indexOf(pizza);
    $scope.pizzas.splice(index, 1);
  };

});
