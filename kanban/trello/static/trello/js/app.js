console.log('hello');

var $board = $('#task_list');

$.ajax({
    url: '/api/tasks'
}).done(function(response){
    console.log(response);
    if (response.count > 0){
        response.results.forEach(function(result){
            var $col = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');

            var $card = $('div class="card card-block">');

        });

    }
});

// <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">hello</div>


// var app = angular.module('TrelloApp', [
//      'ui.router',
//      'restangular'
//  ]);
//
//  app.controller 'AppController', ['$scope', 'Post', ($scope, Post) ->
//      $scope.posts = Post.query()
//  ]
