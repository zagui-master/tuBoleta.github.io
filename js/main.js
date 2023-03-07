/** @format */

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const select = document.getElementById("select");
  if (select.value === "1") {
    buyTikets(select.value, 20);
  }
  if (select.value === "2") {
    buyTikets(select.value, 40);
  }
  if (select.value === "3") {
    buyTikets(select.value, 30);
  }
  form.reset();
});

const buyTikets = (numeroFila, tikest) => {
  const $alert = document.getElementById("alert");
  const fila = numeroFila;
  let tiketsDisponibles = tikest;
  let numTikets;

  let ask = confirm(
    `Numero de tikets disponibles en la fila numero ${fila} - ${tiketsDisponibles}, desea comprar?`
  );

  while (ask && tiketsDisponibles > 0) {
    let getTikets = parseInt(
      prompt(`¿cuantos tikets de la fila numero ${fila} quiere comprar?`)
    );
    numTikets += getTikets;
    if (isNaN(getTikets) || getTikets <= 0) {
      $alert.innerText = `Dato invalido`;
      $alert.classList.add("fail");
      break;
    }

    if (getTikets > tiketsDisponibles) {
      $alert.innerText = `Solo contamos con ${tiketsDisponibles} tikets disponibles`;
      $alert.classList.add("fail");
      break;
    }

    if (getTikets <= tiketsDisponibles) {
      numTikets += getTikets;
      tiketsDisponibles = tiketsDisponibles - getTikets;
      $alert.innerText = `Numero de tikets comprados ${numTikets}`;
      $alert.classList.add("ok");
      ask = confirm(
        `Numero de tikets disponibles ${tiketsDisponibles}, desea comprar mas?`
      );
    }

    if (tiketsDisponibles === 0) {
      $alert.innerText = `La fila numero ${fila} ya no cuenta con tikets disponibles, le sugerimos mirar las filas restantes.`;
      $alert.classList.add("fail");
    }
  }
  setTimeout(() => {
    $alert.innerText = "";
  }, 6000);
};
