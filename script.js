const grid = document.querySelector("#grid");
const resetButton = document.querySelector("#reset-button");
let gridSize = 16;
createGrid();

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

function draw(event) {
    cellColor = 'RGB(' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ')';

    event.target.style.backgroundColor = cellColor;

}

grid.addEventListener('mouseover', draw);
resetButton.addEventListener('click', resetGrid);