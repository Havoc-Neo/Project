//simple stop watch

//variables 
var desSec = 0;
var desMin = 0;
var desHrs = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var inter = null;
var stat = "stopped";


function Watch() {

    seconds++;
    if (seconds / 60 === 1)  {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }
    //Makes it so a 0 is displayed so it is 00:00:00 and not 0:0:0
    if (seconds < 10) {
        desSec = "0" + seconds.toString();
    } else {
        desSec = seconds;
    }
    
    if (minutes < 10) {
        desMin = "0" + minutes.toString();
    } else {
        desMin = minutes;
    }

    if (hours < 10) {
        desHrs = "0" + hours.toString();
    } else {
        desHrs = hours;
    }
    document.getElementById("display").innerHTML = desHrs + ":" + desMin + ":" + desSec;
}
//start button if pressed again it will stop the timer 
function start() {
    //starts watch
    if (stat === "stopped") {
        inter = window.setInterval(Watch, 1000);
        document.getElementById("start").innerHTML = "stop";
        stat = "start";
    } else { 
        //stops watch
        window.clearInterval(inter);
        document.getElementById("start").innerHTML = "start";
        stat = "stop";
    }
}
//simple refresh button 
function refresh() {
    window.clearInterval(inter);
    //sets timer to 0
    seconds = 0;
    minutes = 0;
    hours = 0;
    //displays 00:00:00 resetting the timer
    document.getElementById("display").innerHTML = "00:00:00";
    //displays stock in the first button
    document.getElementById("start").innerHTML = "start";
}