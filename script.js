function drawGrid(gridSize) {
    let squareSize = setSquareSize(gridSize);
    for (let i = 0; i < gridSize; i++) {
        const grid = document.querySelector('#grid');
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            setGridElement(row, squareSize);
        }
    }
}

function deleteGrid() {
    const grid = document.querySelector('#grid');
    grid.remove();
}

function changeColor(gridElement) {
    gridElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function setGridElement(row, squareSize) {
    const gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'gridElement');
            gridElement.style.cssText = `display: flex;width: ${squareSize}px;height: ${squareSize}px;`;
            row.appendChild(gridElement);
            gridElement.addEventListener('mouseover', (event) => {
                changeColor(gridElement);
            });
}

function setSquareSize(gridSize) {
    if (gridSize > 100) {
        gridSize = 100;
    }
    let squareSize = 500 / gridSize;
    return squareSize;
}



const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let gridSize = prompt('Enter the grid size (max 100px)');
    if (document.querySelector('#grid') != undefined) {
        deleteGrid();
    }
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    document.body.appendChild(grid);
    drawGrid(gridSize);
})

