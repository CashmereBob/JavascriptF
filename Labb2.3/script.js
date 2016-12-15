var users = [
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


var errorDiv = $('#error');
var submit = $('#submit');
var age = $('#age');
var result = $('#hiddenText');
var form = $('#form');
var username = $('#username');
var firstname = $('#firstname');
var lastname = $('#lastname');
var telnummer = $('#telnummer');
var city = $('#city');
var fetch = $('#getUser');
var fetchError = $('#fetchError');

submit.on("click", function(e){

        errorDiv.html("");
        errorDiv.css('background-color', "");
        result.css('visibility', 'hidden');
        fetchError.text("");

    if(age.val() < 1 || age.val() > 110 ){
        errorDiv.html(age.val() + " Är ingen giltig ålder.");
        errorDiv.css('background-color', "#FFA5A5");
    } else {
        var newAge = age.val() - 10;
        form.css('display', 'none');
        result.css('visibility', '');
        result.css('background-color', '#BEF2A4');
        result.val(
            username.val() + "\n" + 
            firstname.val() + "\n" + 
            lastname.val() + "\n" + 
            telnummer.val() + "\n" + 
            city.val() + "\n" + 
            age.val() + "\n" +
            "För tio år sedan var du " + newAge + " år gammal."
        );
        
    };
});

fetch.on("click", function(e){
    fetchError.text("");

    var user = {
        username: "",
        firstname: "",
        lastname: "",
        telnummer: "",
        city: "",
        age: ""
    };

    $.each(users, function(key, value){
        if(username.val() == value.username) {
            user = value;
        } 
    });

    if (user.username != ""){
        username.val(user.username);
        firstname.val(user.firstname);
        lastname.val(user.lastname);
        telnummer.val(user.telnummer);
        city.val(user.city);
        age.val(user.age);
    } else {
        fetchError.text("Användaren finns inte");
        fetchError.css('color', 'red');
    };
    
});