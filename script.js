//6   
let colorBlack = document.querySelector('div');
colorBlack.classList.add('selected');

//7   
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

//8
function pintar() {
  let pixelBoard = document.querySelector('#pixel-board')
  pixelBoard.addEventListener('click', function (event) {
    let classSelected = document.querySelector('.selected')
    event.target.style.backgroundColor = window.getComputedStyle(classSelected).backgroundColor;
  })
}
pintar();

// //9
function buttonClear () {
  let pixelBoard = document.getElementsByClassName('pixel')
  let btnClear = document.querySelector('#clear-board');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    btnClear.addEventListener('click', function(event) {
     pixelBoard[index].style.backgroundColor = 'white'
    })
  }
}
buttonClear();
