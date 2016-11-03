// Main Angular Application
var App = angular.module("myApp", ["firebase"]);

App.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);

App.controller('masterCtrl', ['$scope', function($scope) {

  

}])
