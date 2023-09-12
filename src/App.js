import './App.css';
import React, { useState } from 'react';
import CargarJugador from './components/CargarJugador';
import Encabezado from './components/Encabezado';
import Reglamento from './components/Reglamento';
import ResultadoRonda from './components/ResultadoRonda';
import AreaJuego from './components/AreaJuego';




function App() {  
  // const [nombre, setNombre] = useState("");


  return (
      <div>

      <CargarJugador/>
      <Encabezado/>
      <Reglamento/>
      <ResultadoRonda/>
      <AreaJuego/>


      </div>
    );
}

export default App;

// <CargarJugador cargarNombre={setNombre}/>