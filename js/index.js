'use strict';
var routerApp = angular.module('routerApp', ['ui.router']);
function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/main/list");
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "main.html",

        })
        .state("main.list", {
            url: "/list",
            templateUrl: "list.html",
            controller: "ListController"

        })
        .state("main.edit", {
            url: "/edit/:id",
            templateUrl: "edit.html",
            controller: "EditController"
        })
        .state("main.detail", {
            url: "/detail/:id",
            templateUrl: "detail.html",
            controller: "DetailController"
        }).state("main.add", {
            url: "/add",
            templateUrl: "add.html",
            controller: "AddController"
        });
};


routerApp.config(routeConfig);

var newsList = [{
    id: 1,
    title: 'title 1111',
    content: 'content 1111111',
    date: new Date()
}, {
    id: 2,
    title: 'title 2222',
    content: 'content 2222222',
    date: new Date()
}, {
    id: 3,
    title: 'title 3333',
    content: 'content 3333333',
    date: new Date()
}, {
    id: 4,
    title: 'title 4444',
    content: 'content 4444444',
    date: new Date()
}, {
    id: 3,
    title: 'title 5555',
    content: 'content 5555555',
    date: new Date()
}, {
    id: 3,
    title: 'title 6666',
    content: 'content 6666666',
    date: new Date()
}, {
    id: 3,
    title: 'title 7777',
    content: 'content 7777777',
    date: new Date()
}];

routerApp.controller('ListController', function ($scope) {
    $scope.newsList = newsList;
});

routerApp.controller('DetailController', function ($scope, $stateParams) {
    $scope.news = newsList[$stateParams.id - 1];
});

routerApp.controller('AddController', function ($scope, $location, $state) {
    $scope.title = '';
    $scope.content = '';
    $scope.add = function () {
        newsList.push({
            id: newsList.length + 1,
            title: $scope.title,
            content: $scope.content,
            date: new Date()
        });
        $state.go('main.list');
        //$location.path('list');
    }
});

routerApp.controller('EditController', function ($scope, $state, $stateParams) {
    console.log('hi');
    $scope.news = newsList[$stateParams.id - 1];
    $scope.update = function () {
        newsList[$stateParams.id - 1] = $scope.news;

        $state.go("main.list");
    }
})