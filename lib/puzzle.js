

const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map((e) => { return parseInt(e.innerHTML); });
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!");
  }
};

const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
  (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

const swapTile = (tile) => {
  const emptyTile = document.querySelector(".empty")
    emptyTile.classList.remove("empty")
    tile.classList.add("empty")
    emptyTile.innerHTML = tile.innerHTML
    tile.innerHTML = ""

};

// 1. select the tiles
const tiles = document.querySelectorAll('td');

// 2. add the eventlistener
tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {

  // 3. check if tile can move
  if (canMove(tile)) {

  // 4.swap the tiles with the empty space
  swapTile(tile)
  // 5. check if player has won
  checkIfPlayerWins()
  };

  });
});

