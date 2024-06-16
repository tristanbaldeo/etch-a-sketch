const container = document.querySelector(".grid-container")

let gridSize = 8

function makeGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        let row = document.createElement("div");
        row.style.width = `${640/gridSize}px`;
        row.className = "row";
        container.appendChild(row);
    }
}

makeGrid();