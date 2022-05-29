import "./styles.css";
let btnEnv = document.getElementById("enviar");
let PrimerArray: number[] = new Array(6);
//empezar los nombres de variables y funciones con minuscula
let SegundoArray: number[] = new Array(6);
let resultado: number[] = new Array(6);
let indice: number;
btnEnv.addEventListener("click", () => {
  function CargarArray(arraycarga: number[]) {
  //es raro que necesites encapsular una funcion aca, deberian estar declaradas fuera del boton
    for (indice = 0; indice < 6; indice++) {
      // lo ideal seria usar array.length ya que si necesitas cambiar la cantidad de elementos solo cambias en la primer asignacion y no en el resto del codigo.
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
//esta correcta la solucion
