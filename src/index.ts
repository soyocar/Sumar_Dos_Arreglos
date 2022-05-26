import "./styles.css";
let btnEnv = document.getElementById("enviar");
let PrimerArray: number[] = new Array(6);
let SegundoArray: number[] = new Array(6);
let resultado: number[] = new Array(6);
let indice: number;
btnEnv.addEventListener("click", () => {
  function CargarArray(arraycarga: number[]) {
    for (indice = 0; indice < 6; indice++) {
      arraycarga[indice] = prompt(
        `Ingrese el valor de la posicion ${indice}: `
      );
    }
  }
  function SumaArreglos(v1: number[], v2: number[], resultado: number[]) {
    for (indice = 0; indice < 6; indice++) {
      resultado[indice] = Number(v1[indice]) + Number(v2[indice]);
    }
  }
  alert("Se ingresarán los datos del Primer Array");
  CargarArray(PrimerArray);
  alert("Ingrese los datos del Segundo Array");
  CargarArray(SegundoArray);
  SumaArreglos(PrimerArray, SegundoArray, resultado);
  alert("La suma de los array es " + resultado);
});
