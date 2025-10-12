"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {

    var container = document.querySelector("#container");
    console.log(container);

    const startBtn = document.querySelector("#reset-Btn");
    console.log(startBtn);

    startBtn.addEventListener("click", createGrid, {capture: true });
}

function createGrid() {

    event.preventDefault();

    const defaultCount = 16;
    let count = defaultCount;

    console.log("createGrid()...");
    console.log(`defaultCount: ${defaultCount}`);

    let countStr = prompt("Please enter a number of squares per row:", "16");
    if ((countStr != null) && (countStr != "") && (! isNaN(parseInt(countStr)))) {
        count = parseInt(countStr) ?? defaultCount;
    }
    
    console.log(`countStr: ${countStr} => count: ${count}`);

    const containerWidth = Math.floor(visualViewport.height * 70 / 100);
    const containerHeight = containerWidth;
    console.log(`Grid dimensions: ${containerWidth} x ${containerHeight}px`);

    const squareWidth = Math.floor((containerWidth - (count - 1)) / count);
    const squareHeight = squareWidth;
    console.log(`Square dimensions: ${squareWidth} x ${squareHeight}px`);
/* 
    container.styles.width = containerWidth;
    container.styles.height = containerHeight; */



    
}

