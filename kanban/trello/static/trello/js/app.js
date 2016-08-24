var $task_list = $('#task_list');

function createDeleteListButton(listId){
    var $delButton = $('<button id="del_list_button" type="button" class="btn btn-primary">Delete List</button>');
    $delButton.click(function(){
        $.ajax({
            method: 'DELETE',
            url: '/api/tasks' + listId + '/',
        });
        //Delete column
        $delButton.parent().parent().remove();
    });
    return $delButton;
}

function createAddCardButton(listId){
    var $addCardButton = $('<button id="add_card_list_button" type="button" class="btn btn-primary">Add Card</button>');
    // $delButton.click(function(){
    //     $.ajax({
    //         method: 'DELETE',
    //         url: '/api/tasks' + listId + '/',
    //     });
    //     //Delete column
    //     $delButton.parent().parent().remove();
    // });
    return $addCardButton;
}


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
    createAddCardButton(list.id).appendTo($card);
    createDeleteListButton(list.id).appendTo($card);
    $col.appendTo($task_list);
}

function addButton(){

}


function createNewList(name) {
    // CREATE NEW LIST IN DATABASE
    $.ajax({
        method: 'POST',
        url: '/api/tasks',
        data: {
            name: name,
        }
    });
    // ADD NEW COLUMN TO page
    var $card = $('<div class="card card-block">');
    var $cardTitle = $('<h4 class="card-title">').text(name).appendTo($card);
    createAddCardButton(list.id).appendTo($card);
    createDeleteListButton(list.id).appendTo($card);
    return $card;
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

function refreshPage() {
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
                    url: '/api/tasks/',
                    data: {
                        name: 'Untitled'
                    }
                });
                var $listCol = $addListButton.parent();
                var $buttonCol = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">');
                $addListButton.appendTo($buttonCol);
                $buttonCol.appendTo($task_list);
                var $card = $('<div class="card card-block">');
                var $cardTitle = $('<h4 class="card-title">').text('Untitled').appendTo($card);
                $card.appendTo($listCol);
                // createNewList('Untitled').appendTo($listCol); //NEEDS TO RENDER TO A DIFFERENT COLUMN EACH
            });
        }
    });
}

refreshPage();
