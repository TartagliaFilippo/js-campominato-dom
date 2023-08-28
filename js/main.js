/**
 * !funzione che genera le celle
 * @param {indice} i
 * @param {celleTotali} totalCell
 * @returns cella
 */
function createCell(i, totalCell, bombsArray) {
  // creo la mia cella
  const cell = document.createElement("div");
  if (totalCell == "100") {
    cell.classList.add("cell", "ten");
  } else if (totalCell == "81") {
    cell.classList.add("cell", "nine");
  } else if (totalCell == "49") {
    cell.classList.add("cell", "seven");
  }

  cell.innerHTML = i;

  // stabilisco un evento al click della cella
  cell.addEventListener("click", function () {
    // parso il numero della cella
    const cellNumber = parseInt(cell.innerHTML);

    bombsArray = generateBombs(1, totalCell, 16);

    // determino il click della bomba
    if (bombsArray.includes(cellNumber)) {
      // click della bomba
      this.classList.add("bomb");
      // end-game al click della bomba
      endgame("Fine partita. Hai totalizzato " + score + " punti");
    } else {
      // click cella libera
      this.classList.add("color-click");
      score++;

      // cliccate tutte le celle finisco il gioco
      if (score >= freeCells) {
        endgame("Fine partita. Hai totalizzato " + score + " punti.");
      }
    }
  });
  return cell;
}

/**
 * !funzione che genera la griglia
 * @param {celle totali} totalCell
 */
function getGenerateGrid(totalCell) {
  // reset per la nuova partita
  gridElement.innerHTML = "";

  // variabile cella inserita in un ciclo for
  for (let i = 1; i <= totalCell; i++) {
    const cell = createCell(i, totalCell);
    // stampo la cella
    gridElement.append(cell);
  }
}

/**
 * !funzione che genera numeri random
 * @param {number} min minimo del range
 * @param {number} max massimo del range
 * @returns {number}
 */
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
/**
 * !funzione che genera array con numeri unici
 * @param {number} min
 * @param {number} max
 * @param {number} qty
 * @returns
 */
function generateBombs(min, max, qty) {
  const uniqueArray = [];

  while (uniqueArray.length < qty) {
    const uniqueNumber = getRandomNumber(min, max);
    if (!uniqueArray.includes(uniqueNumber)) uniqueArray.push(uniqueNumber);
  }

  return uniqueArray;
}

/**
 * ! funzione endgame
 */

const endgame = (msg) => {
  // stampo il punteggio
  alert(msg);

  // * Superbonus 1 - evito che si possa cliccare su altre celle.
  gameOver = true;
};

// elementi del dom
// contenitore griglia
const gridElement = document.getElementById("grid");

// bottone genera griglia
const buttonGrid = document.getElementById("generate-grid");

// select della difficoltà
const difficultySelect = document.getElementById("difficulty-select");

// punteggio
let score = 0;

// celle libere
let freeCells;

// variabile game over
let gameOver;

buttonGrid.addEventListener("click", function () {
  // variabile che definisce il mio numero di celle
  const totalCell = parseInt(difficultySelect.value);

  // valorizzo le bombe
  let bombsArray = generateBombs(1, totalCell, 16);

  // valorizzo le celle libere
  freeCells = totalCell - bombsArray.length;

  // dichiaro la variabile gameover
  gameOver = false;

  getGenerateGrid(totalCell);
});
