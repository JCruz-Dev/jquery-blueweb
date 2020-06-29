$(document).ready(function(){
    // $('h1').html("Etiqueta H1");
    // $('.display-4').html('Desde Clase');
    // $('#idh1').html('Desde ID')

    // $('h1').text('Etiqueta h1')
    // $('.display-4').text('Desde Clase')
    // $('#idh1').text('Desde ID')

    // $('.container h1').html('cambiando todos los h1')

    // $('.container h1:first').html('accediendo solo al primer H1')

    // $('.container h1:last').html('accediendo al ultimo elemento')

    // $('#idh1').addClass('text-danger');

    // $('#idh1').removeClass('display-4');

    // $('.container').append('<h1>Este es otro titulo desde jquery</h1>')

    $('#button').click(function(){
        $('#idh1').toggleClass('color');
        $('#idh1').css('color', 'yellow')
    })


});