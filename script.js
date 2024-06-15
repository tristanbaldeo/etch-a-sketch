const grid = document.querySelector(".grid-container")

function makeGrid() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

    for (j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.className = "col";
        row.appendChild(col);
        }
    }
}

makeGrid();