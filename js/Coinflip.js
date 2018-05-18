"use strict";
var max;
var last;
var CoinFlip = function () {
    var divTimer = HTMLDivElement = document.getElementById('divTimer');
    divTimer.style.display = "none";
    var divCoin = HTMLDivElement = document.getElementById('divCoinFlip');
    divCoin.style.display = "table";
};
var Flip = function (n) {
    if (n > 0 && n <= 100000) {
        SimpleRandom(n);
        var lblRandomLabel = HTMLLabelElement = document.getElementById('lblRandomResult');
        lblRandomLabel.innerHTML = "Random number is: " + nextInt().toString();
    }
    else {
        alert("Can't generate random number");
    }
};
var SimpleRandom = function (x) {
    max = x;
    last = (Date.now() % max);
};
var nextInt = function () {
    last = (last * 32719 + 3) % 32749;
    return last % max;
};
