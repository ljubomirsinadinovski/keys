// This is a automated script written by Ljubomir Sinadinovski
// The script is used in combination with Tampermonkey, the Google Chrome extension
// Basically it refreshes the webpage until it finds valid BTC address

// ==UserScript==
// @name         KEYS.LOL
// @namespace    http://keys.lol/
// @version      0.1
// @description  try to take over the world!
// @author       Ljubomir Sinadinovski
// @match        https://keys.lol/bitcoin/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var foundValid = false;
    var error = true;

    setTimeout(function(){
        var children = document.getElementsByClassName("mx-auto")[3].children;
        for (var i = 0; i < children.length; i++) {
            var tableChild = children[i];
            var innerTextResult = tableChild.getElementsByClassName("wallet-tx")[0].innerText;
            if (innerTextResult == "(? tx)") {
                error = true;
            }
            if (innerTextResult !== "(0 tx)") {
                foundValid = true
            }
        }

        if (foundValid !== true) {
            this.document.location = "https://keys.lol/bitcoin/random"
        }
    }, 5000);
})();