var $task_list = $('#task_list');

$.ajax({
    url: '/api/tasks'
}).done(function(response){
    if (response.count > 0){
        response.results.forEach(function(result){
            var $col = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
            var $card = $('<div class="card card-block">').appendTo($col);
            var $cardTitle = $('<h4 class="card-title">').text(result.name).appendTo($card);
            $cardTitle.click(function(){
                var listName = $cardTitle.text();
                $cardTitle.empty();
                var $form = $('<form>').appendTo($cardTitle);

                var $input = $('<input type="text">').val(listName);

                $input.click(function(){
                    return false;
                });

                $input.appendTo($form);

                $form.submit(function(){
                    var listName = $input.val();
                    console.log(result)
                    $.ajax({
                        method: 'PUT',
                        url: 'api/tasks/' + result.id + '/',
                        data : {
                            name: listName
                        }
                    });
                    $cardTitle.empty();
                    $cardTitle.text(listName);
                    return false;
                });
            });

            var $ul = $('<ul class="list-group list-group-flush">').appendTo($card);
            console.log('yay');
            console.log(result.card_set);
            if (result.card_set.length > 0){
                console.log('yep');
                result.card_set.forEach(function(res){
                    console.log('mmm');
                    var $li = $('<li class="list-group-item">').text(res.name).appendTo($ul);
                });
            }
            var $addCard = $('<a href="#" class="card-link">Add a card</a>').appendTo($card);
            var $delList = $('<a href="#" class="card-link">Delete list</a>').appendTo($card);
            $col.appendTo($task_list);
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
