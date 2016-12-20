var MyApp = MyApp || {};

MyApp.anstallda = [
    {
        name: "Anställd 1"
    },
    {
        name: "Anställd 2"
    },
    {
        name: "Anställd 3"
    },
    {
        name: "Anställd 4"
    },
    {
        name: "Anställd 5"
    },
    {
        name: "Anställd 6"
    },
];

MyApp.bilar = [
    {
        name: "Bil 1"
    },
    {
        name: "Bil 2"
    },
    {
        name: "Bil 3"
    },
    {
        name: "Bil 4"
    },
    {
        name: "Bil 5"
    },
    {
        name: "Bil 6"
    },
];

MyApp.div = $('#content');

$("#anstalldaButton").on('click', function(){
    MyApp.div.html("");
    $.each(MyApp.anstallda, function(key, value){
        MyApp.div.append('<p>'+value.name+'</p>');
    });
});

$("#bilarButton").on('click', function(){
    MyApp.div.html("");
    $.each(MyApp.bilar, function(key, value){
        MyApp.div.append('<p>'+value.name+'</p>');
    });
});