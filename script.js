// 6   
let colorBlack = document.querySelector('div');
colorBlack.classList.add('selected');

// 7   
function colorSelected() {
  let classSelected = document.getElementsByClassName('color');
  for (let index = 0; index < classSelected.length; index += 1) {
    classSelected[index].addEventListener('click', elementClick)
  }
}
function elementClick(event) {
  let classSelected = document.getElementsByClassName('color');
  // console.log(classSelected);
  for (let index = 0; index < classSelected.length; index += 1) {
    classSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
colorSelected();

// 8
function pintar() {
  let pixelBoard = document.querySelector('#pixel-board')
  pixelBoard.addEventListener('click', function (event) {
    let classSelected = document.querySelector('.selected')
    event.target.style.backgroundColor = window.getComputedStyle(classSelected).backgroundColor;
  })
}
pintar();

// 9
function buttonClear () {
  let pixelBoard = document.getElementsByClassName('pixel')
  let btnClear = document.querySelector('#clear-board');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    btnClear.addEventListener('click', function() {
     pixelBoard[index].style.backgroundColor = 'white'
    })
  }
}
buttonClear();

// 10
function board() {
  let boardSize = document.getElementById('board-size');
  let pixelsAll = document.getElementsByClassName('pixel');
  let texto = boardSize.value;

  if(texto === ''){
    alert('Board inválido!');
  }
  let numberPixels = pixelsAll.length;
  let pixelBoard = document.getElementById('pixel-board');
  for(let index = 0; index < numberPixels; index +=1) {
    pixelBoard.removeChild(pixelsAll[0]);
    pixelBoard.style.backgroundColor = 'white'
  }
  pixelBoard.style.gridTemplateColumns = 'repeat('+ texto +', 1fr)';
  for(let index = 0; index < parseInt(texto) * parseInt(texto); index +=1) {
    let createPixels = document.createElement('div');
    createPixels.classList.add('pixel');
    pixelBoard.appendChild(createPixels);
  }
}
let generateBoard = document.getElementById('generate-board');
generateBoard.addEventListener('click', board);
