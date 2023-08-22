// collego il contenitore della griglia
const gridElement = document.getElementById("grid");

// collego il bottone a un evento
const buttonGrid = document.getElementById("generate-grid");

buttonGrid.addEventListener("click", function () {
  getGenerateGrid();
});

function getGenerateGrid() {
  // variabile cella inserita in un ciclo for
  for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);
    // stampo la cella
    gridElement.append(cell);
  }
}

// funzione che genera celle
function createCell(i) {
  // creo la mia cella
  const cell = document.createElement("div");
  cell.classList.add("ten");
  cell.innerHTML = i;

  // stabilisco un evento al click della cella
  cell.addEventListener("click", function () {
    // aggiungo la classe colore
    cell.classList.add("color-click");
    console.log(i);
  });

  return cell;
}
