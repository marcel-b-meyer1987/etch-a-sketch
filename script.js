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

    const container = document.querySelector("#container");    

    if (container.hasChildNodes) {
        container.innerHTML = "";
        squares.splice(0, squares.length);
    }
    
    const mode = document.querySelector("#mode");
    console.log(mode.value);

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

            }

            squares.push(newSquare);
            container.appendChild(newSquare);

        }        

    }
    
    console.log(squares);    

}

    function blackenSquare(event) {
        event.target.style.opacity="1";
        event.target.style.backgroundColor = "black";
    }

    function darkenSquare(event) {
        let currentOpacity = parseFloat(event.target.style.opacity);
        let newOpacity = currentOpacity + 0.1;
        // console.log(`Opacity: ${currentOpacity} -> ${newOpacity}`);
        event.target.style.opacity = newOpacity.toString(); 
    }