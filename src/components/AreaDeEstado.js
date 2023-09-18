import React from "react";
import "./estilos/AreaDeEstado.css";

function Estado({nroRonda, resultRonda}) {
    return (
        <div className="reglamento">
            <h4 id="reglas">Modo: El primero en ganar 3 rondas gana el juego !</h4>
            <h2 id="nroRonda">{nroRonda}</h2>
            <br/>
            <h2 id="resultRonda">{resultRonda}</h2>
        </div>
    );
}
export default Estado;