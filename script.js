$(document).ready(function() {
    var friends = ['Liz','Randall','Laura','John','Margie'];

    var locations = ['Hotel','Dyrons','Top Golf','UAB','Oak Mountain','Flora Bama','Avondale Brewery','Jordan Hare Staduim','Bryant Denny Stadium','Madison Square Garden'];

    var weapons = ['7 Iron','Juul','Bacon','Putter','Blues Leash','Butter','Lobster Tail','Fan','Dip Can','Roomba','Beer Can','Tiger','Elephant','Eagle Claw','Coffee Cup','Golf Ball','Balloon','Xbox Controller','Remote Control','Phone Charger'];
    
    
    for (var i = 1; i < 101; i++) {
    var $header3 = $('<h3></h3>');
    var $header3Text = 'Accusation' +  ' ' + [i];
    
    $($header3).append($header3Text);
    
    $header3.on('click', accusation(i));
    $('body').append($header3);
    };

    function accusation(i) {
        return function() {
            var f = friends[i % 5];
            var l = locations[i % 10];
            var w = weapons[i % 20];
            alert('Accusation' + ' ' + i + ': I accuse' + ' ' + f + ', with the weapon' + ' ' + w + ' ' + 'at' + ' ' + l + '!');
        };
        
    };



    


});