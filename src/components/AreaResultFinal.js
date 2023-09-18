import React from "react";
import "./estilos/AreaResultFinal.css";

function ResultadoFinal() {
    return(
        <div>
            <div className="area-ganaste">
                <p id="ganaste">&#128512; GANASTE!!!</p>
            </div>

            <div className="area-perdiste">
                <p id="perdiste">&#128543; PERDISTE</p>
            </div>
        </div>
    );
}

export default ResultadoFinal;