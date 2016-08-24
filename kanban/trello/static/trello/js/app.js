var $task_list = $('#task_list');

function addCard(list) {
    var $col = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
    var $card = $('<div class="card card-block">').appendTo($col);
    var $cardTitle = $('<h4 class="card-title">').text(list.name).appendTo($card);

    // MAKE LIST TITLE UPDATEABLE
    $cardTitle.click(function() {
        var listName = $cardTitle.text();
        $cardTitle.empty();
        var $form = $('<form>').appendTo($cardTitle);
        var $input = $('<input type="text">').val(listName);
        $input.click(function() {
            return false;
        });

        $input.appendTo($form);
        $form.submit(function() {
            var listName = $input.val();
            $.ajax({
                method: 'PATCH',
                url: '/api/tasks/' + list.id + '/',
                data: {
                    name: listName,
                }
            });
            $cardTitle.empty();
            $cardTitle.text(listName);
            return false;
        });
    });

    var $ul = $('<ul class="list-group list-group-flush">').appendTo($card);
    if (list.card_set.length > 0) {
        list.card_set.forEach(function(res) {
            var $li = $('<li class="list-group-item">').text(res.name).appendTo($ul);
        });
    }
    var $addCard = $('<a href="#" class="card-link">Add a card</a>').appendTo($card);
    var $delList = $('<a href="#" class="card-link">Delete list</a>').appendTo($card);
    $col.appendTo($task_list);
}

function addButton(){

}


function addNewList() {
    // CREATE NEW LIST IN DATABASE
    $.ajax({
        method: 'POST',
        url: '/api/tasks',
        data: {
            name: 'Untitled',
        }
    });
    // ADD NEW COLUMN TO page
    $buttonCol = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
    $listCol = $('#add_list_button').parent();
    // $(#add_list_button).appendTo($buttonCol);

    // MOVE BUTTON TO NEW COLUMN

    // ADD LIST TO COLUMN WHERE BUTTON WAS

}

function deleteList(listId) {
    $.ajax({
        method: 'DELETE',
        url: '/api/tasks' + listId + '/',
    });
}


$.ajax({
    url: '/api/tasks'
}).done(function(response) {
    if (response.count > 0) {
        response.results.forEach(function(result){
            addCard(result);
        });
        // ADD A BUTTON TO CAN GENERATE A NEW LIST
        var $col = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
        var $addListButton = $('<id="add_list_button" button type="button" class="btn btn-secondary">Create List</button>').appendTo($col);
        $col.appendTo($task_list);

        $addListButton.click(function() {
            console.log('Button Clicked!');
            $.ajax({
                method: 'POST',
                url: '/api/tasks',
                data: {
                    name: 'Untitled',
                }
            });
            $buttonCol = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
            $addListButton.appendTo($buttonCol);
            $buttonCol.appendTo($task_list);
        });
    }
});
