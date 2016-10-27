
var moduleroutes = angular.module('modulroute', ['ngRoute','modSessionStorage','otherModule']);
 moduleroutes.controller('ctrlMain', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

moduleroutes.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/page-one',{
        // example cookies with add module in view
        templateUrl: '/page_one.html'
    })
    .when('/page-two',{
        // example cookies no module in view
        templateUrl: '/page_two.html',
        controller: 'otherController'
    })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


