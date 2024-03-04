// TODO: write code here

// console.log("start");

// const img = document.documentElement.children[1].children[0];

// img.style.cssText = "position:absolute;";
// let cellWidth = document.documentElement.clientWidth >> 2;
// let cellHeight = document.documentElement.clientHeight >> 2;
let posX = Math.round(3 * Math.random());
let posY = Math.round(3 * Math.random());
// let coordX = cellWidth * posX;
// let coordY = cellHeight * posY;
const table = document.documentElement.children[1].children[0];
table.children[posY].children[posX].children[0].style.visibility = "visible";

setInterval(() => {
  // cellWidth = document.documentElement.clientWidth >> 2;
  // cellHeight = document.documentElement.clientHeight >> 2;
  let newPosX = Math.round(3 * Math.random());
  let newPosY = Math.round(3 * Math.random());
  while (posX == newPosX && posY == newPosY) {
    if (posX == newPosX) newPosX = Math.round(3 * Math.random());
    if (posY == newPosY) newPosY = Math.round(3 * Math.random());
  }
  table.children[posY].children[posX].children[0].style.visibility = "hidden";
  table.children[newPosY].children[newPosX].children[0].style.visibility = "visible";
  posX = newPosX;
  posY = newPosY;
  // coordX = cellWidth * posX;
  // coordY = cellHeight * posY;
  // img.style.left = coordX + "px";
  // img.style.top = coordY + "px";
  // console.log("pos: ", posX, ", ", posY);
}, 500);
