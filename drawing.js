const container = document.querySelector(".container");
const input = document.querySelector("input");
const scale = document.querySelector(".scale");

function reset(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function getRandomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function colorGrid(e){
    e.target.style["background-color"] = getRandomRGB();
}

function createGrid(e){
    e.target.classList.add('shrinking')
    reset();
    const scaleNumber = input.valueAsNumber;
    if(scaleNumber > 100 || !Number.isInteger(scaleNumber) || scaleNumber < 0){
        input.focus();
    }else if (scaleNumber >= 1){
        for (let i = 0; i < scaleNumber * scaleNumber; i++){
        const gridUnit = document.createElement('div');
        gridUnit.classList.add('grid');
        container.appendChild(gridUnit);
        gridUnit.style.width = `${960 / scaleNumber}px`;
        gridUnit.style.height = `${960 / scaleNumber}px`;
        }
    }
    const grid = document.querySelectorAll(".grid");
    grid.forEach(div => div.addEventListener('mouseenter', colorGrid));
}

function buttonAnimation(e){
if(e.propertyName !== 'transform') return; // Skips if "transform" isn't part of class
this.classList.remove("shrinking")
}
scale.addEventListener('click', createGrid);
scale.addEventListener('transitionend', buttonAnimation);
