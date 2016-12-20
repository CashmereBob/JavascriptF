var MyApp = MyApp || {};

MyApp.anstallda = [
    {
        name: "Anställd 1",
        car: false
    },
    {
        name: "Anställd 2",
        car: false
    },
    {
        name: "Anställd 3",
        car: false
    },
    {
        name: "Anställd 4",
        car: true
    },
    {
        name: "Anställd 5",
        car: false
    },
    {
        name: "Anställd 6",
        car: true
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

MyApp.CheckIfCar = function (anstallda){
    var dfd = $.Deferred();
    var bool = false;

    $.each(anstallda, function(key, value){
        if (value.car){
            MyApp.div.append('<p>'+value.name+'</p>');
            bool = true;
        }
    });

    if (bool){
        dfd.resolve();
    } else {
        dfd.reject();
    }

    return dfd.promise();
};

$("#anstalldaButton").on('click', function(){
    MyApp.div.html("");
        MyApp.CheckIfCar(MyApp.anstallda).then(
            function(){},
            function(){
                MyApp.div.html("Det finns inga anställda som får köra bil");
            }
        ).always( function() {
            MyApp.div.append('<p>Klart!</p>');
        }
        );
    });

$("#bilarButton").on('click', function(){
    MyApp.div.html("");
    $.each(MyApp.bilar, function(key, value){
        MyApp.div.append('<p>'+value.name+'</p>');
    });
});

