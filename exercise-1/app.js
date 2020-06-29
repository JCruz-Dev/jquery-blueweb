$(document).ready(function () {
    let input = $('#task-input');
    let button = $('#button');
    let container = $('.task-container');
    button.click(function () {
        if (input.val().length > 0) {
            container
            .append(`<p id="task" class="task">${input.val()} <button id="remove" class="remove">X</button></p>`);
            input.val('')
        }
    })
    $(container).on('click', '#remove', function () {
        $('#task').remove()
    })
});