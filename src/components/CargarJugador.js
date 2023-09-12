

// function CargarJugador({cargarNombre}) {

import AreaJuego from "./AreaJuego";

  
  // function CargarJugador({cargarNombre}) {
function CargarJugador() {
  
  let nombre = prompt("INGRESA TU NOMBRE O ALIAS PARA COMENZAR A JUGAR             (hasta 9 caracteres)")
    while (nombre == " " || nombre == "." || !nombre || nombre.length > 9) {
      nombre = prompt("UPS !!...Ingresa un nombre válido (hasta 9 caracteres)");
    }
    nombre = nombre.toUpperCase();
  

    // return(nombre);

  // cargarNombre(nombre);
}

export default CargarJugador;

