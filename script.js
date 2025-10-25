"use strict";

let drawingEnabled = true;
let squaresCount = 16;
let containerWidth = 960;
let squareWidth = 60;
const squares = [];

document.addEventListener("DOMContentLoaded", () => {

    const resetBtn = document.querySelector("#reset-Btn");
    

    console.log(resetBtn);
    console.log(container);

    resetBtn.addEventListener("click", createSquares);

});

function createSquares() {

    const container = document.querySelector("#container");    

    if (container.hasChildNodes) {
        container.innerHTML = "";
        squares.splice(0, squares.length);
    }
    
    const mode = document.querySelector("#mode");
    console.log(mode.value);

    const paint_mode = document.querySelector("#paint_mode");
    console.log(paint_mode.value);
    if (paint_mode.value === "Drag") {
        drawingEnabled = false;
        document.addEventListener("mousedown", () => drawingEnabled = true);
        document.addEventListener("mouseup", () => drawingEnabled = false);
    }

    squaresCount = prompt("Please enter the wanted number of squares per row.", "24");
    
    for (let i = 0; i < squaresCount; i++) {

        for (let j = 0; j < squaresCount; j++) {

            const newSquare = document.createElement("div");

            newSquare.style.flex = `1 1 calc(100% / ${squaresCount})`;

            switch(mode.value) {

                case "Darken": 
                    newSquare.style.opacity = "0.1";
                    newSquare.addEventListener("mouseover", darkenSquare);
                    break;

                case "Blacken": 
                    newSquare.addEventListener("mouseover", blackenSquare);
                    break;

                case "Colorize": 
                    newSquare.addEventListener("mouseover", colorizeSquare);
                    break;

            }

            squares.push(newSquare);
            container.appendChild(newSquare);

        }        

    }
    
    console.log(squares);    

}

    function blackenSquare(event) {
        if (drawingEnabled) {
            event.target.style.opacity = "1";
            event.target.style.backgroundColor = "black";
        }
    }

    function darkenSquare(event) {
        if (drawingEnabled) {
            let currentOpacity = parseFloat(event.target.style.opacity);
            let newOpacity = currentOpacity + 0.1;
            // console.log(`Opacity: ${currentOpacity} -> ${newOpacity}`);
            event.target.style.opacity = newOpacity.toString(); 
        }
    }

    function colorizeSquare(event) {
        if (drawingEnabled) {
            event.target.style.opacity = "1";

            let colors = {
                r: Math.floor(Math.random()*256),
                g: Math.floor(Math.random()*256),
                b: Math.floor(Math.random()*256),
            };

            event.target.style.backgroundColor = `rgb(${colors.r}, ${colors.g}, ${colors.b})`;
        }
    }