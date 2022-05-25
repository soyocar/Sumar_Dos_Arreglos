import "./styles.css";
let btnEnv = document.getElementById("enviar");
let PrimerArray: number[] = new Array(6);
let SegundoArray: number[] = new Array(6);
let SumaArray: number[] = new Array(6);
let indice: number;
btnEnv.addEventListener("click", () => {
  function CargarArray(arraycarga: number[]) {
    for (indice = 0; indice < 6; indice++) {
      arraycarga[indice] = prompt(
        `Ingrese el valor de la posicion ${indice}: `
      );
    }
  }
});
