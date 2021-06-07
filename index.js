const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = []

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i=0; i < 100; i++) {
     //create element
    const square = document.createElement('div')
    console.log(square)
    //add styling to the element
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)   
    }
}
createGrid()


currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    //remove last element from our currentSnake array
    
    currentSnake.pop();
    //remove styling from last element
    
    //add sqaure in direction we are heading
    
    //add styling so we can see it
 
}
move()