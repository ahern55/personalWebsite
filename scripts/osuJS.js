// JavaScript source code



$(window).on("load", function setTime() {

    var past = new Date(2011, 10, 26, 12, 0, 0, 0);
    var msInDay = 86400000;
    var daysInMonth = 365 / 12;
    


    this.setInterval(function run() {

        $("#time").text("");
        $("#time2").text("");

        
        var current = new Date();

        var difference = current.getTime() - past.getTime();
        

        var daysTotal = difference / msInDay;


        var years = Math.floor(daysTotal / 365);
        daysTotal -= (years * 365);

        var months = Math.floor(daysTotal / daysInMonth);
        daysTotal -= (months * daysInMonth);

        var days = Math.floor(daysTotal);
        daysTotal -= (days);

        var hours = Math.floor(daysTotal * 24);
        daysTotal -= (hours / 24);

        var minutes = Math.floor(daysTotal * 1440);
        daysTotal -= (minutes / 1440);

        var seconds = Math.floor(daysTotal * 86400);
        daysTotal -= (seconds / 86400);

        var ms = Math.floor(daysTotal * msInDay);
        daysTotal -= (ms / msInDay);

        days--;
        var s = years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds ";

        $("#time").append(s);
        $("#time2").append(ms);

        


    }, 1);

    
    

});

$(function test() {

    return 2;

});

$("img").on("click", function two() {

    $("div").append(test());


});