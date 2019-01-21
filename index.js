//add functionality to the submit form//

$( "#js-shopping-list-form" ).submit(function(event) {
    event.preventDefault();

    //get value of a grocery list item from input form//

    const inputItem = $('#shopping-list-entry').val();

    //clear the input form//

    $('#shopping-list-entry').val('');


    /* add the new shopping list item to the bottom, takes similar code to the HTML and uses our
    new input for shopping list as the value*/

    $('.shopping-list').append( 
        `<li>
        <span class="shopping-item">${inputItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`
        
    );
});

// make the additional buttons functional //

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(this).closest( "li" ).find('.shopping-item')
    .toggleClass('shopping-item__checked');
});



//delete functionality//
$('.shopping-list').on('click','.shopping-item-delete', function(event) {
    $(this).closest("li").remove();
});

  
