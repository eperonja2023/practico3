import CargarJugador from "./CargarJugador";


function AreaJuego() {
    return(
        <div className="area-juego">
            <div id="jugadores">
                <p id="player">jugador</p>
                <p id="marcador-player">0</p>
            </div>

            <div id="imgJugadaPlayer"><img className= "jugada-player" src={require("./images/cerebro2.png")}/></div>
            <div id="imgJugadaPc"><img className="jugada-pc" src={require("./images/pc.jpg")}/></div>

            <div id="jugadores">
                <p>PC</p>
                <p id="marcador-pc">0</p>
            </div>
        </div>
    );
}

export default AreaJuego;