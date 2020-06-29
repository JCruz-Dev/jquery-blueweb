$(document).ready(function(){
    $('.generate').click(function(){
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts`,
            type: 'GET',
            dataType: 'json',
            success : function(json) {
                console.log(json)
               let content = ''
               json.map(value => {
                   content += `<div class="content"><h1>${value.title}</h1>
                   <p>user: ${value.userId}</p>
                   <p>id: ${value.id}</p>
                   <p>${value.body}</p></div>`
               })
               $('.container').append(content)
            },
            
    
        })
    })
    $('#clean').click(function(){
        $('.container').html('')
    })
})