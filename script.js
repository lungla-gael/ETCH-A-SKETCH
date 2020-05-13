let flexContainer = document.querySelector('.flex-container');
let divArray = [];
let totalNumberOfSquares = 0;

function createGrid(numberOfSquaresPerSide) {
    var squareWidth = (1280/Number(numberOfSquaresPerSide))-2;
    var stringWidth = squareWidth+"px";
    var squareHeight = squareWidth-10;
    var stringHeight = squareHeight+"px";
    totalNumberOfSquares =numberOfSquaresPerSide*numberOfSquaresPerSide;
    for (var index = 0; index < totalNumberOfSquares ;  index++) {
        var flexItem = document.createElement('div');
        flexItem.style.width = stringWidth;    
        flexItem.style.height = stringHeight;
        flexContainer.appendChild(flexItem);
        divArray[index] = flexItem;        
    }    
}

let button = document.querySelector('#clearGrid');
function buttonEventListener() {
    button.addEventListener('click', clickButton);
    function changeColor(element) {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        element.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    }
    divArray.forEach(element => {
        element.addEventListener('mouseenter', function(){ changeColor(element)});
    });    
}

createGrid(16);
buttonEventListener();

function clearTheGrid() {
    for (let index = 0; index < totalNumberOfSquares ;  index++) {
        flexContainer.removeChild(divArray[index]);
    }
}
function clickButton() {
    clearTheGrid();
    var numberOfSquaresPerSide = prompt("enter the the number of squares you want per side");
    createGrid(numberOfSquaresPerSide);
    button.addEventListener('click', clickButton);
    buttonEventListener();
}