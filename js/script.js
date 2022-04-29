let digiSec = document.getElementById("sec");
let digiMinit = document.getElementById("min");
let digiHours = document.getElementById("hour");
let digiper = document.getElementById("period");
let digiday = document.getElementById("daynum");
let digiweek = document.getElementById("dayname");
let digimonth = document.getElementById("month");
let digiyear = document.getElementById("year");

function setClock(){
    let date = new Date();
    let daynum = date.getDate().toString();
    let year = date.getFullYear().toString();
    let sec = date.getSeconds();
    let minit = date.getMinutes();
    let hours = date.getHours();
    let month = date.getMonth().toString();
    let day = date.getDay().toString();

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"]
    let weekval = [week[day]]
    let monthval = [months[month]]

    hours = hours === 0 ? hours = 12 : hours;
    
    if(hours >= 12){
        digiper = digiper.innerText = "PM"
    }
    if(hours >=0){
        digiper = digiper.innerText = "AM"
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(sec < 10){
        sec = "0" + sec
    }

    if(minit < 10){
        minit = "0" + minit
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    digiday.innerText = daynum;
    digiweek.innerText = weekval;
    digimonth.innerText = monthval;
    digiyear.innerText = year;
    digiSec.innerText = sec;
    digiMinit.innerText = minit;
    digiHours.innerText = hours;
}
setInterval(setClock, 1000);
setClock()