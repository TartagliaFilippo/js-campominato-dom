/**
 * !funzione che genera le celle
 * @param {indice} i
 * @param {celleTotali} totalCell
 * @returns cella
 */
function createCell(i, totalCell) {
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
    // aggiungo la classe colore
    cell.classList.add("color-click");
    console.log(i);
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

// elementi del dom
// contenitore griglia
const gridElement = document.getElementById("grid");

// bottone genera griglia
const buttonGrid = document.getElementById("generate-grid");

// select della difficoltà
const difficultySelect = document.getElementById("difficulty-select");

// punteggio
let score = 0;

buttonGrid.addEventListener("click", function () {
  // variabile che definisce il mio numero di celle
  const totalCell = parseInt(difficultySelect.value);

  getGenerateGrid(totalCell);
});
