function randomHoverColor() {
    square.addEventListener('mouseover', (e) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = `#${randomColor}`
    })
}

function createGrid() {
    let boxesWidth = prompt('Width in boxes? (Max 15)')
    if (boxesWidth > 15) {
        boxesWidth = 15;
    }
    console.log(boxesWidth)
    let boxesHeight = prompt('Height in boxes? (Max 8)')
    if (boxesHeight > 7) {
        boxesHeight = 7;
    }
    console.log(boxesHeight)
    let totalBoxes = boxesHeight * boxesWidth
    container.setAttribute('style', `height: ${boxesHeight * 100}px;`)
    container.setAttribute('style', `width: ${boxesWidth * 100}px;`)
    body.appendChild(container)
    for (let i = 1; i <= totalBoxes; i++) {
        const square = document.createElement('div')
        square.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);

            console.log(e.target)
            e.target.style.background = `#${randomColor}`
            // e.target.classList.add('hovered')
        })
    container.appendChild(square)
    }
}

function clearGrid() {
    body.removeChild(container)
}

const container = document.querySelector('.body')
const body = document.querySelector('body')

let gridBtn = document.querySelector('#newGrid')
let clearBtn = document.querySelector('#clear')
gridBtn.addEventListener('click', createGrid)
clearBtn.addEventListener('click', clearGrid)
