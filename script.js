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

    const squares = [[]];

    //for each row...
    for (let i = 0; i < count; i++) {

        //...and for each column
        for (let j = 0; j < count; j++) {

            //add a div 
            squares[i][j] = document.createElement("div");
            /* squares[i][j].styles.width = squareWidth;
            squares[i][j].styles.ieight = squareHeight; */
            squares[i][j].id = `square[${i}][${j}]`;

            container.appendChild(squares[i][j]);

        }

    }



    
}

