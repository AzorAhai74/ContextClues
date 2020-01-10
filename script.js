$(document).ready(function() {
    for (var n = 1; n < 101; n++) {
    var $header3 = $('<h3></h3>');
    var $header3Text = 'Accusation' +  ' ' + n;

    
       
    $($header3).append($header3Text);
    $('body').append($header3);

    var friends = [
        { name: 'Liz'},
        { name: 'Randall'},
        { name: 'Laura'},
        { name: 'John'},
        { name: 'Margie'}
    ];

    var locations = [
        { name: 'Hotel'},
        { name: 'Dyrons'},
        { name: 'Top Golf'},
        { name: 'UAB'},
        { name: 'Oak Mountain'},
        { name: 'Flora Bama'},
        { name: 'Avondale Brewery'},
        { name: 'Jordan Hare Staduim'},
        { name: 'Bryant Denny Stadium'},
        { name: 'Madison Square Garden'}
    ];

    var weapons = [
        { name: '7 Iron'},
        { name: 'Juul'},
        { name: 'Bacon'},
        { name: 'Putter'},
        { name: 'Blues Leash'},
        { name: 'Butter'},
        { name: 'Lobster Tail'},
        { name: 'Fan'},
        { name: 'Dip Can'},
        { name: 'Roomba'},
        { name: 'Beer Can'},
        { name: 'Tiger'},
        { name: 'Elephant'},
        { name: 'Eagle Claw'},
        { name: 'Coffee Cup'},
        { name: 'Golf Ball'},
        { name: 'Balloon'},
        { name: 'Xbox Controller'},
        { name: 'Remote Control'},
        { name: 'Phone Charger'}
    ];


    $header3.click(function() {
        var i;

        for (i = 0; i < friends.length && locations.length && weapons.length; i++) {
            var f = Math.floor(Math.random()[friends[i].name * 5 - 1]);
            var l = Math.floor(Math.random()[locations[i].name * 10 - 1]);
            var w = Math.floor(Math.random()[weapons[i].name * 20 - 1]);
            $($header3).click(function() {
                alert('Accusation' + ' ' + n + ': I accuse' + f + ', with the weapon' + w + 'in the' + l + '!');
            });
            function alertValue() {
                alert($('input').val());
            }
            $('input').change(alertValue);
            alert($(':input[type="text"]').val());

        }
    });
    
    };



    
    



});