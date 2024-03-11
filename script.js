const grid = document.querySelector("#grid");
const resetButton = document.querySelector("#reset-button");
const blackButton = document.querySelector(".color-black");
const redButton = document.querySelector(".color-red");
const blueButton = document.querySelector(".color-blue");
const rainbowButton = document.querySelector(".color-rainbow");

let gridSize = 16;
createGrid();
chooseColor("black");



function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.flexBasis = (100 / gridSize + "%");
            grid.appendChild(cell);
        }
    }
}

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function resetGrid() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
    gridSize = Number(prompt("how many?"));
    removeGrid();
    createGrid();
}


function chooseColor(color) {
    if (color) {
        cellColor = color;
    } else {
        cellColor = 'RGB';
    }
}

function draw(event) {
    if (cellColor !== 'RGB') {
        event.target.style.backgroundColor = cellColor;
    } else {
        event.target.style.backgroundColor = 'RGB(' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ')';
    }
}


blackButton.addEventListener('click', () => { chooseColor("black") });
redButton.addEventListener('click', () => { chooseColor("red") });
blueButton.addEventListener('click', () => { chooseColor("blue") });
rainbowButton.addEventListener('click', () => { chooseColor() });

grid.addEventListener('mouseover', draw);
resetButton.addEventListener('click', resetGrid);