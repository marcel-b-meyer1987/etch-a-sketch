"use strict";

let squaresCount = 16;
let containerWidth = 960;
let squareWidth = 60;
const squares = [];

document.addEventListener("DOMContentLoaded", () => {

    const resetBtn = document.querySelector("#reset-Btn");
    

    console.log(resetBtn);
    console.log(container);



    resetBtn.addEventListener("click", createSquares)




});

function createSquares() {

    // squaresCount = prompt("Please enter the wanted number of squares per row.", "24");
    const container = document.querySelector("#container");    

    if (container.hasChildNodes) {
        container.innerHTML = "";
        squares.splice(0, squares.length);
    }
    

/*     // First calculate the dimensions of the squares, based on actual container size + wanted number of squares
    let cWidth = container.offsetWidth;
    let borderSpace = squaresCount - 1;
    let squareWidth = Math.floor((cWidth - borderSpace) / squaresCount);
    console.log("Calculating dimensions of squares...");
    console.log(`Container Width: ${cWidth}px`);
    console.log(`Space needed for ${(squaresCount - 1)} borders: ${borderSpace}px`);
    console.log(`Available width/height per square: ${squareWidth}px`);

    for (let i = 0; i < squaresCount * squaresCount; i++) {

        const newSquare = document.createElement("div");
        newSquare.setAttribute("width", `${squareWidth}px`);
        newSquare.setAttribute("height", `${squareWidth}px`);
        // newSquare.setAttribute("flex-grow","0");
        container.appendChild(newSquare);
        squares.push(newSquare);

    } */

    for (let i = 0; i < (squaresCount * squaresCount); i++) {

        const newSquare = document.createElement("div");
        newSquare.addEventListener("mouseover", blackenSquare);

        squares.push(newSquare);
        container.appendChild(newSquare);

    }
    
    console.log(squares);

    

}

    function blackenSquare(event) {
        event.target.style.backgroundColor = "black";
    }
