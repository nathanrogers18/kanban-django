console.log('hello');

var $board = $('#board');

$.ajax({
    url: '/list'
}).done(function(response){
    console.log(response);
    if (response.count > 0){
        console.log(response.results);
    }
});

// <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">hello</div>
