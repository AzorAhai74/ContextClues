$(document).ready(function() {
    for (let n = 1; n < 101; n++) {
    let $header3 = $('<h3></h3>');
    let $header3Text = 'Accusation' +  ' ' + n;

    $($header3).append($header3Text);
    $('body').append($header3);
    }
    
    let friends = ['Liz', 'Randall', 'Laura', 'John', 'Margie'];

    let locations = ['Hotel', 'Dyrons', 'Top Golf','UAB', 'Oak Mountain', 'Flora Bama', 'Avondale Brewery', 'Jordan Hare Staduim', 'Bryant Denny Stadium', 'Madison Square Garden'];

    let weapons = ['7 Iron', 'Juul', 'Bacon', 'Putter', '']
});