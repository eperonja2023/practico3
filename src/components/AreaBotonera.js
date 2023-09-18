import React, { useState } from "react";
import "./estilos/AreaBotonera.css";
import imgPiedra from "./images/imgPiedra.png";
import imgPapel from "./images/imgPapel.png";
import imgTijera from "./images/imgTijera.png";

function AreaBotonera() {

    const [eleccionPlayer, setEleccionPlayer] = useState(null);
    const [eleccionPc, setEleccionPc] = useState(null);


    const jugadaPlayer = (eleccionPlayer) => {
        setEleccionPlayer(eleccionPlayer);
        JugadaPC();
    };

    const JugadaPC = () => {
        const opciones = ["piedra", "papel", "tijera"];
        const aleatorioPc = Math.floor(Math.random()*3);
        const eleccionPc = opciones[aleatorioPc ];
        setEleccionPc(eleccionPc);
    }

    console.log("eleccion Jugador: " + eleccionPlayer);
    console.log("eleccion PC: " + eleccionPc);


return(
    <div className="botonera">
        {/* <div id="progreso">
            <div id="barra"></div>
        </div> */}

        <button className="btn-eleccion" id="piedra" onClick={() => jugadaPlayer("piedra")}><img src={imgPiedra}/></button>
        <button className="btn-eleccion" id="papel" onClick={() => jugadaPlayer("papel")}><img src={imgPapel}/></button>
        <button className="btn-eleccion" id="tijera" onClick={() => jugadaPlayer("tijera")}><img src={imgTijera}/></button>

        <div id="aviso-elige-tu-opcion">
            <h3>ELIGE TU OPCION</h3>
        </div>
    </div>
);
}

export default AreaBotonera;