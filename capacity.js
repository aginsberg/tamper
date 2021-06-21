// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yexttest.atlassian.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const button = document.querySelector('.js-assigned-work-dialog-trigger');
    button.addEventListener('click', () => {
        const table = document.querySelector('#assigned-work-dialog');
        for (const row of table.querySelectorAll('td')) {
            console.log(row);

        }
    })
})();