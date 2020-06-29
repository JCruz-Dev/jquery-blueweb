### JQUERY Introduction

Video Link: https://www.youtube.com/watch?v=DVN8NWppCN0
Author: BluuWeb

Content infp: https://www.bluuweb.org/jquery

# Changes the HTML of an element

```js
$(element).html(text);
// You can use classes and id to select. $('.class') or $('#elementID)
```

# Changes the text property of and element

```js
$(element).text(text);
// You can use classes and id to select. $('.class') or $('#elementID)
```

# Changes the first element specified

```js
$('.container h1:first').text(text);
```

# Changes the last element specified

```js
$('.container h1:last').text(text);
```

# Adds a class to a element

```js
$('h1').addClass('.your css class');
```

# Removes a class of a element

```js
$('h1').removeClass('.display-4');
```

# Appends a element to a container

```js
$('container').append('<h1>this a element appended</h1>');
```

# Change a css style to a element

```js
$('h1').css('background', 'red');
```

# The events on JQuery are done this the property `click`

```js
$('#button').click(function () {
    console.log('button');
});
$('#button').click(function () {
    $('#idh1').toggleClass('color');
    $('#idh1').css('color', 'yellow');
});
```

# Adding atributes and chaining methods

```js
$('h1').attr('width', '100%').css({ background: 'yellow', color: '#333' });
```

# Removes Node from DOM

```js
$('h1').remove('#idh1');
```
