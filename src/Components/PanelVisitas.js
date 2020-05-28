import React, { Fragment } from 'react';


const PanelVisitas = ({visita, eliminarCita}) => {


    return (
        <Fragment>            
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-header text-center h4">
                        Apto {visita.txtApto}
                    </div>
                    <div className="card-body">
                        <b>Nombre: </b> {visita.txtNombre}<br />
                        <b>Documento: </b> {visita.txtDoc}<br />
                        <b>Celular: </b> {visita.txtCelular}<br />
                        <b>Fecha: </b> {visita.txtFecha}<br />
                        <b>Hora: </b> {visita.txtHora}
                    </div>
                    <div className="card-footer">
                        <button 
                            className="btn btn-block btn-danger"
                            onClick={ () => eliminarCita(visita.id)}
                        >Eliminar</button>
                    </div>
                </div>                
            </div>  
        </Fragment>
     );
}
 
export default PanelVisitas;