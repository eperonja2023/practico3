import React, { useState } from "react";
import "./App.css";
import Encabezado from "./components/AreaEncabezado";
import AreaDeEstado from "./components/AreaDeEstado";
import AreaJuego from "./components/AreaJuego";
import AreaBotonera from "./components/AreaBotonera";
import imgCerebro from "./components/images/imgCerebro.png";
import imgPc from "./components/images/imgPc.jpg";
import ResultadoFinal from "./components/AreaResultFinal";
import Reiniciar from "./components/Reiniciar";



// import ResultadoRonda from "./components/ResultadoRonda";


function App() {

  const [estadoDelJuego, setEstadoDelJuego] = useState({
  // imgPlayer: imgCerebro,
  // imgPc: imgPc,
  nroRonda: "listo para empezar !!!",
  resultRonda: "Ronda 1"
  })

console.log(estadoDelJuego)

  return (
    <div className="contenedor-del-juego">
      <Encabezado />
      <AreaDeEstado
        nroRonda={estadoDelJuego.nroRonda}
        resultRonda={estadoDelJuego.resultRonda}
      />
      <AreaJuego
        opcionPlayer={estadoDelJuego.opcionPlayer}
        opcionPc={estadoDelJuego.opcionPc}
      />
      <AreaBotonera />
      <ResultadoFinal />
      <Reiniciar />


    </div>
  );
}

export default App;


















// import './App.css';
// import React, { useState } from 'react';
// import CargarJugador from './components/CargarJugador';
// import Encabezado from './components/Encabezado';
// import Reglamento from './components/Reglamento';
// import ResultadoRonda from './components/ResultadoRonda';
// import AreaJuego from './components/AreaJuego';




// function App() {  
//   // const [nombre, setNombre] = useState("");


//   return (
//       <div>

//       <CargarJugador/>
//       <Encabezado/>
//       <Reglamento/>
//       <ResultadoRonda/>
//       <AreaJuego/>


//       </div>
//     );
// }

// export default App;

// <CargarJugador cargarNombre={setNombre}/>