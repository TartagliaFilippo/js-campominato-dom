// collego il contenitore della griglia
const gridElement = document.getElementById("grid");

// collego il bottone a un evento
const buttonGrid = document.getElementById("generate-grid");

// collego il select
const difficultySelect = document.getElementById("difficulty-select");

buttonGrid.addEventListener("click", function () {
  const difficulty = difficultySelect.value;
  getGenerateGrid(difficulty);
});

function getGenerateGrid(difficulty) {
  if (difficulty == "1") {
    // variabile cella inserita in un ciclo for
    for (let i = 1; i <= 100; i++) {
      const cell = createCell(i, difficulty);
      // stampo la cella
      gridElement.append(cell);
    }
  } else if (difficulty == "2") {
    // variabile cella inserita in un ciclo for
    for (let i = 1; i <= 81; i++) {
      const cell = createCell(i, difficulty);
      // stampo la cella
      gridElement.append(cell);
    }
  } else if (difficulty == "3") {
    // variabile cella inserita in un ciclo for
    for (let i = 1; i <= 49; i++) {
      const cell = createCell(i, difficulty);
      // stampo la cella
      gridElement.append(cell);
    }
  }
}

// funzione che genera celle
function createCell(i, difficulty) {
  // creo la mia cella
  const cell = document.createElement("div");
  if (difficulty == "1") {
    cell.classList.add("cell", "ten");
  } else if (difficulty == "2") {
    cell.classList.add("cell", "nine");
  } else if (difficulty == "3") {
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
