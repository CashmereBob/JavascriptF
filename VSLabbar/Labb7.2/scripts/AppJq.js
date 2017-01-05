/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    $("#addBookDiv").hide();
    $("#addBookButton").click(function () {
        $("#addBookDiv").slideToggle();
    });
});
function HideMediaTable() {
    $('#mediaTable').hide();
    $('#bookTable').show();
}
function HideBookTable() {
    $('#mediaTable').show();
    $('#bookTable').hide();
}
