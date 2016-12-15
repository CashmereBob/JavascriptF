var names = ["Magnus", "Li", 1, "Urban", 2, "Lena", "4", "Maria" ];
var errorDiv = $('#error');
var outputDiv = $('#output');

$.each(names, function(key, value){
    if($.isNumeric(value)) {
        errorDiv.html("Siffor hittades i Arrayn. Dessa har ej skrivits ut.");
        errorDiv.css('background-color', 'yellow');
    } else {
        outputDiv.val(outputDiv.val() + value + ", ");
    }
});
