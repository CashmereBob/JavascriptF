var MyApp = MyApp || {};

MyApp.users = [
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

for (var i = 0 ; i < MyApp.users.length; i++){
       MyApp.users[i].name = function (){return this.firstname + " " + this.lastname};
    }


$('#button').on('click', function(e){
    for (var i = 0 ; i < MyApp.users.length; i++){
        $('#textOutput').html($('#textOutput').html() + "<br />" + MyApp.users[i].name());
    }
});



