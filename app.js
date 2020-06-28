$(document).ready(function(){
    //THis method takes the html property of the element and changes its text
    // $('h1').html("Etiqueta H1");
    // $('.display-4').html('Desde Clase');
    // $('#idh1').html('Desde ID')

    //This method  edits the text property of the element
    // $('h1').text('Etiqueta h1')
    // $('.display-4').text('Desde Clase')
    // $('#idh1').text('Desde ID')

    //This method takes as arguments container and childs to change text
    // $('.container h1').html('cambiando todos los h1')

    //This method changes the first child specified with the class first
    // $('.container h1:first').html('accediendo solo al primer H1')

    //This method changes the last child specified with the class last
    $('.container h1:last').html('accediendo al ultimo elemento')
});