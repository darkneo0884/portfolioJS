"use strict";
var days = 1;
var hours = 23;
var minutes = 27;
var seconds = 0;
var lblDays = document.getElementById('lblDays');
var lblHours = document.getElementById('lblHours');
var lblMinutes = document.getElementById('lblMinutes');
var lblSeconds = document.getElementById('lblSeconds');
lblDays.innerHTML = "1";
lblHours.innerHTML = "23";
lblMinutes.innerHTML = "27";
lblSeconds.innerHTML = "0";
var TimerCounter = function () {
    //show/hide panels
    var divTimer = HTMLDivElement = document.getElementById('divTimer');
    divTimer.style.display = "table";
    var divCoin = HTMLDivElement = document.getElementById('divCoinFlip');
    divCoin.style.display = "none";
    var timer = setInterval(function () {
        if (seconds <= 59) {
            //change seconds
            lblSeconds.innerHTML = seconds.toString();
            seconds++;
        }
        else {
            seconds = 0;
            lblSeconds.innerHTML = seconds.toString();
            //Change minutes
            if (minutes <= 59) {
                minutes++;
                lblMinutes.innerHTML = minutes.toString();
            }
            else {
                minutes = 0;
                lblMinutes.innerHTML = minutes.toString();
                //change hours
                if (hours <= 24) {
                    hours++;
                    lblHours.innerHTML = hours.toString();
                }
                else {
                    hours = 0;
                    lblHours.innerHTML = hours.toString();
                    //change days
                    days++;
                    lblDays.innerHTML = days.toString();
                }
            }
        }
    }, 1000);
};
