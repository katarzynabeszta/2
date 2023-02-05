const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const paragraph = document.querySelector('p');
let currentFontSize = 36;
const minFontSize = 10;
const maxFontSize = 64;

const increaseText = () => {
  if (currentFontSize > maxFontSize) return;
  currentFontSize = currentFontSize + 2;
  paragraph.style.fontSize = currentFontSize + 'px';
};

const decreaseText = () => {
  if (currentFontSize < minFontSize) return;
  currentFontSize = currentFontSize - 2;
  paragraph.style.fontSize = currentFontSize + 'px';
};

const colorChanger = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  paragraph.style.color = `rgb(${r}, ${g}, ${b})`;
};

sizeUpBtn.addEventListener('click', increaseText);
sizeDownBtn.addEventListener('click', decreaseText);
colorBtn.addEventListener('click', colorChanger);
