const container = document.querySelector(".grid-container");
const grid = document.getElementById("grid-size");
const rows = document.querySelectorAll("row")

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

grid.onchange=function() {
	changeWidth();

    let mouseDown = false;
    let mouseUp = true;
    
    document.querySelectorAll(".row").forEach(paint => {
        paint.addEventListener("mousedown", () => {
            paint.style.backgroundColor = "black";
    })});
    
    document.querySelectorAll(".row").forEach(paint => {
        paint.addEventListener("mousedown", () => {
            mouseDown = !mouseDown;
        })
    });
    
    document.querySelectorAll(".row").forEach(paint => {
        paint.addEventListener("mouseover", () => {
            if (mouseDown) {
            paint.style.backgroundColor = "black";
        }})
    });
    
    document.querySelectorAll(".row").forEach(paint => {
        paint.addEventListener("mouseup", () => {
            mouseDown = !mouseDown;
        })
    });
}

function changeGrid() {
    if (grid.value == "16x16") {
        gridSize = 16;
    } else if (grid.value == "32x32") {
        gridSize = 32;
    } else if (grid.value == "64x64") {
        gridSize = 64;
    } else {
        gridSize = 8;
    }
    console.log(gridSize)
}

function makeGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        let row = document.createElement("div");
        row.style.width = `${640/gridSize}px`;
        row.style.height = `${640/gridSize}px`;
        row.className = "row";
        container.appendChild(row);
    }
}

changeWidth();
makeGrid();

let mouseDown = false;
let mouseUp = true;

document.querySelectorAll(".row").forEach(paint => {
    paint.addEventListener("mousedown", () => {
        paint.style.backgroundColor = "black";
})});

document.querySelectorAll(".row").forEach(paint => {
    paint.addEventListener("mousedown", () => {
        mouseDown = !mouseDown;
    })
});

document.querySelectorAll(".row").forEach(paint => {
    paint.addEventListener("mouseover", () => {
        if (mouseDown) {
        paint.style.backgroundColor = "black";
    }})
});

document.querySelectorAll(".row").forEach(paint => {
    paint.addEventListener("mouseup", () => {
        mouseDown = !mouseDown;
    })
});

let reset = document.querySelector('.clear');
reset.addEventListener('click', function (){
    $(".row").css( 'background-color', '#f5f5f5');
});