const size = 40;
let drawToggle = false;

const drawStart = (e) => {
  e.target.style.backgroundColor = 'black';
  drawToggle = true;
};

const drawing = (e) => {
  if (!drawToggle) return;

  e.target.style.backgroundColor = 'black';
};

const drawEnd = (e) => {
  drawToggle = false;
};

const outOfGrid = (e) => {
  if (e.target !== gridContainer) return;
  if (!drawToggle) return;
  
  drawToggle = false;
}

const createGrid = () => {
  for (let i = 0; i < size*size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid');
    gridElement.addEventListener('mousedown', drawStart);
    gridElement.addEventListener('mouseenter', drawing);
    gridElement.addEventListener('mouseup', drawEnd);
    //gridElement.style.cssText = 'border: 2px solid red';
    gridContainer.appendChild(gridElement);
  };
};

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
gridContainer.addEventListener('mouseleave', outOfGrid);

createGrid();