// JavaScript source code


$(window).on("load", function loadList() {


    var list = localStorage.getItem('listHTML');
    $("#list").html(list);


});

$("#button").on("click", function () {


    add();


});

$(document).keypress(function (event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        add();
    }


});


function add() {


    var s = $("#textBox").val();

    if (s.length > 0) {

        var newItem = document.createElement("li");
        $(newItem).addClass("listItem");
        newItem.innerHTML = s;
        $("#list").append(newItem);
        $("#textBox").val("");
        $("#textBox").attr("placeholder", "");



    }

    saveList();

}


$("#list").on("click", "li", function remove() {

    $(this).remove();

    saveList();
});


function saveList() {

    var list = $("#list").html();

    localStorage.setItem('listHTML', list);


}






