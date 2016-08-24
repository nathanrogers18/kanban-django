console.log('hello');

var $board = $('#task_list');

$.ajax({
    url: '/api/tasks'
}).done(function(response){
    console.log(response);
    if (response.count > 0){
        response.results.forEach(function(result){
            var $col = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
            var $card = $('<div class="card card-block">').appendTo($col);
            var $cardTitle = $('<h4 class="card-title">').text(result.name).appendTo($card);
            var $ul = $('<ul class="list-group list-group-flush">');
            var $li = $('<li class="list-group-item">');
            var $addCard = $('<a href="#" class="card-link">Add a card</a>');
            var $delList = $('<a href="#" class="card-link">Delete list</a>');

            $col.appendTo($board);


        });

    }

});

// <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
//     <div class="card card-block">
//           <h4 class="card-title">Card title</h4>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">Cras justo odio</li>
//             <li class="list-group-item">Dapibus ac facilisis in</li>
//             <li class="list-group-item">Vestibulum at eros</li>
//           </ul>
//           <a href="#" class="card-link">Add a card</a>
//           <a href="#" class="card-link">Delete list</a>
//     </div>
// </div>




// <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">hello</div>


// var app = angular.module('TrelloApp', [
//      'ui.router',
//      'restangular'
//  ]);
//
//  app.controller 'AppController', ['$scope', 'Post', ($scope, Post) ->
//      $scope.posts = Post.query()
//  ]
