const container = document.querySelector(".grid-container");
const grid = document.getElementById("grid-size");
const rows = document.querySelectorAll("row")

const colorButtons = [
    { id: "#redPaint", color: "red" },
    { id: "#orangePaint", color: "orange" },
    { id: "#yellowPaint", color: "yellow" },
    { id: "#greenPaint", color: "green" },
    { id: "#bluePaint", color: "blue" },
    { id: "#purplePaint", color: "purple" },
    { id: "#blackPaint", color: "black" },
    { id: "#whitePaint", color: "white" },
    { id: "#eraserTool", color: "#f5f5f5" },
];

let mouseDown = false;
let mouseUp = true;

let paintColor = "black"

function changeWidth() {
	let selectedValue = grid.options[grid.selectedIndex].value; 
    console.log(selectedValue);

    if (selectedValue == "8x8") {
        gridSize = 8
    } else if (selectedValue == "16x16") {
        gridSize = 16
    } else if (selectedValue == "32x32") {
        gridSize = 32
    } else {
        gridSize = 64
    }

    container.innerHTML = '';
    makeGrid();
}

function makeGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        let row = document.createElement("div");
        row.style.width = `${640/gridSize}px`;
        row.style.height = `${640/gridSize}px`;
        row.className = "row";
        container.appendChild(row);
    }
    addPaintListeners()
}

changeWidth();
makeGrid();

function addPaintListeners() {
    document.querySelectorAll(".row").forEach(paint => {
        paint.addEventListener("mousedown", () => {
            paint.style.backgroundColor = paintColor;
            mouseDown = true;
        });
        paint.addEventListener("mouseover", () => {
            if (mouseDown) paint.style.backgroundColor = paintColor;
            });
        paint.addEventListener("mouseup", () => {
            mouseDown = false;
        });
    });
}

grid.onchange=function() {
	changeWidth();
    addPaintListeners();
}

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll(".row").forEach(row => {
        row.style.backgroundColor = '#f5f5f5';
    });
});

colorButtons.forEach(button => {
    document.querySelector(button.id).addEventListener("click", () => {
        paintColor = button.color;
    });
});