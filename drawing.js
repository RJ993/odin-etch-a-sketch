const container = document.querySelector(".container")

function getRandomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b})`;
    
}
function colorGrid(e){
    e.target.style["background-color"] = getRandomRGB()
    }

function createGrid(){
    for (let i = 0; i < 16 * 16; i++) {
        const gridUnit = document.createElement('div');
        gridUnit.classList.add('grid');
        container.appendChild(gridUnit);
    }
    const grid = document.querySelectorAll(".grid")
    grid.forEach(div => div.addEventListener('mouseenter', colorGrid))
}

document.addEventListener("DOMContentLoaded", createGrid)