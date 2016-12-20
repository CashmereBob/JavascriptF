usersOne = [
    {
        username: "1",
        firstname: "Magnus",
        lastname: "Weidmar",
        telnummer: "0767878060",
        city: "Helsingborg",
        age: 31
    },
    {
        username: "2",
        firstname: "Li",
        lastname: "Nilsson",
        telnummer: "0733XXXX",
        city: "Helsingborg",
        age: 29
    },
    {
        username: "3",
        firstname: "Fredrik",
        lastname: "Falk",
        telnummer: "0767XXXXX",
        city: "Helsingborg",
        age: 30
    }
    ]

usersTwo = [
    {
        username: "4",
        firstname: "Urban",
        lastname: "Weidmar",
        telnummer: "0767878060",
        city: "Helsingborg",
        age: 60
    },
    {
        username: "5",
        firstname: "Lena",
        lastname: "Nilsson",
        telnummer: "0733XXXX",
        city: "Helsingborg",
        age: 59
    },
    {
        username: "6",
        firstname: "Brita",
        lastname: "Falk",
        telnummer: "0767XXXXX",
        city: "Helsingborg",
        age: 64
    }
    ]

$(document).ready(function(e){

    var listOneHTML = "";
    var listTwoHTHL = "";

    $.each(usersOne, function(key, value){
        value.name = function (){return this.firstname + " " + this.lastname};
    });

    $.each(usersTwo, function(key, value){
        value.name = function (){return this.firstname + " " + this.lastname};
    });

    $.each(usersOne, function(key, value){
        listOneHTML += '<li>' + value.name() + '</li>';
    });

    $.each(usersTwo, function(key, value){
        listTwoHTHL += '<li>' + value.name() + '</li>';
    });

    $('#listOne').html(listOneHTML);
    $('#listTwo').html(listTwoHTHL);

$('#fadeIn').click(function(e){
    $('#content').fadeIn();
});

$('#fadeOut').click(function(e){
    $('#content').fadeOut();
});

$('ul li:nth-child(2)').css('color', 'red');

});


