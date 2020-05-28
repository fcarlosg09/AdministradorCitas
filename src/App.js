import React,{ useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import PanelVisitas from './Components/PanelVisitas';


function App() {

  //LocalStorage

  let citasIniciales = JSON.parse(localStorage.getItem('visitas'));
  if(!citasIniciales){
    citasIniciales=[];
  }

  const [visitas, setvisitas] = useState(citasIniciales);

  const crearVisita = (visita) => {
    setvisitas([
      ...visitas,
      visita
    ])
  }

  const eliminarCita = (id) => {
    const nuevasVisitas = visitas.filter(visita => visita.id !== id);
    setvisitas(nuevasVisitas);
  }

  useEffect( () => {
    if(visitas){
      localStorage.setItem('visitas', JSON.stringify(visitas))
    }else{
      localStorage.setItem('visitas', JSON.stringify([]));
    }
  }, [visitas]);


  return (
    <div className="App">
      <h2 className="text-center text-white my-3">Recepción Visitantes</h2>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
            <Formulario 
              crearVisita={crearVisita}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
            <h4 className="text-white text-center">Panel Visitas</h4>
            { visitas.length === 0 ? <div className="alert alert-success">No tienes visitantes en el edificio</div> : null}
            <div className="row">
              {visitas.map(visita => (
                <PanelVisitas
                  key={visita.id}
                  visita={visita}
                  eliminarCita={eliminarCita}
                />
              ))}  
            </div>              
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
