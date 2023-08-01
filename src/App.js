import './App.css';
import Boton from './componentes/boton';
import logo from './imagenes/logo.png';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() { 

  const [numClicks, setNumClicks] = useState(0);
  

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () =>{
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='contador-contenedor'>
        <img className='freecodecamp-logo'
        src={logo}
        alt="logo">
        </img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks= { numClicks }></Contador>
        <Boton
        texto='click'
        esBotonDeClick={ true }
        manejarClick={ manejarClick }>
        </Boton>
        <Boton 
        texto='reiniciar'
        esBotonDeClick={ false }
        manejarClick={ reiniciarContador }></Boton>
      </div>
    </div>
  );
}

export default App;
