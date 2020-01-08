$(document).ready(function() {
    for (var n = 1; n < 101; n++) {
    let $header3 = $('<h3></h3>');
    let $header3Text = 'Accusation' +  ' ' + n;

    $($header3).append($header3Text);
    $('body').append($header3);
    }
    
    var friends = ['Liz', 'Randall', 'Laura', 'John', 'Margie'];

    var locations = ['Hotel', 'Dyrons', 'Top Golf','UAB', 'Oak Mountain', 'Flora Bama', 'Avondale Brewery', 'Jordan Hare Staduim', 'Bryant Denny Stadium', 'Madison Square Garden'];

    var weapons = ['7 Iron', 'Juul', 'Bacon', 'Putter', 'Blues Leash', 'Butter', 'Lobster Tail', 'Fan', 'Dip Can', 'Roomba', 'Beer Can', 'Tiger', 'Elephant', 'Eagle Claw', 'Coffee Cup', 'Golf Ball', 'Balloon', 'Xbox Controller', 'Remote Control', 'Phone Charger'];


});