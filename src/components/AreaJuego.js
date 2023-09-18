import React from "react";
import "./estilos/AreaJuego.css";
import "./AreaBotonera";
import imgCerebro from "./images/imgCerebro.png";
import imgPc from "./images/imgPc.jpg";
import imgPiedra from "./images/imgPiedra.png";
import imgPapel from "./images/imgPapel.png";
import imgTijera from "./images/imgTijera.png";

let nombre = prompt("INGRESA TU NOMBRE O ALIAS PARA COMENZAR A JUGAR             (hasta 9 caracteres)")
while (nombre == " " || nombre == "." || !nombre || nombre.length > 9) {
  nombre = prompt("UPS !!...Ingresa un nombre válido (hasta 9 caracteres)");
}
nombre = nombre.toUpperCase();



function AreaJuego({eleccionPlayer, eleccionPc}) {
    return(
        <div className="area-juego">
            <div id="jugadores">
                <p id="player">{nombre}</p>
                <p id="marcador-player">0</p>
            </div>

            <div id="imgJugadaPlayer"><img className= "jugada-player" src={imgCerebro} alt="imgCerebro"/></div>
            <div id="imgJugadaPc"><img className="jugada-pc" src={imgPc} alt="imgPc"/></div>

            <div id="jugadores">
                <p>PC</p>
                <p id="marcador-pc">0</p>
            </div>
        </div>
    );
}

export default AreaJuego;
