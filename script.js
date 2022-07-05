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
  console.log(classSelected);
  for (let index = 0; index < classSelected.length; index += 1) {
  classSelected[index].classList.remove('selected');
}
event.target.classList.add('selected');
}
colorSelected();
