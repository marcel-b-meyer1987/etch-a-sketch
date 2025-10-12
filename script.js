"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {

    const container = document.querySelector("#container");
    console.log(container);

    const startBtn = document.querySelector("#reset-Btn");
    console.log(startBtn);

    startBtn.addEventListener("click", createGrid, {capture: true });
}

function createGrid() {

    event.preventDefault();

    const defaultCount = 16;

    console.log("createGrid()...");
    console.log(`defaultCount: ${defaultCount}`);

    let countStr = prompt("Please enter a number of squares per row:", "16");
    /* if (countStr != null && countStr != "") {
        let count = parseInt(countStr) ?? defaultCount;
    }
    else {
        let count = defaultCount;
    } */
    let count = parseInt(countStr);
    console.log(`countStr: ${countStr} => count: ${count}`);
    
}

