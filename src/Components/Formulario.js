import React, { Fragment, useState } from 'react';
import uuid from 'react-uuid';

const Formulario = ({crearVisita}) => {

    // Crear State de visitas
    const [visita, setvisita] = useState({
        txtDoc: '',
        txtNombre: '',
        txtCelular: '',
        txtApto: '',
        txtFecha: '',
        txtHora: ''
    });


    const FnValidarCampos = (e) => {
        setvisita({
            ...visita,
            [e.target.name] : e.target.value
        })
    }

    const [error, seterror] = useState(false);

    const { txtDoc, txtNombre, txtCelular, txtApto, txtFecha, txtHora } = visita;

    const submitVisita = (e) =>{
        e.preventDefault();

        // Validar
        if(txtDoc.trim() === '' || txtNombre.trim() === '' || txtCelular.trim() === '' || txtApto.trim() === '' || txtFecha.trim() === '' || txtHora.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);            

        // Asignar Id
        visita.id=uuid();

        // Crear Visita
        crearVisita(visita);

        // Reiniciar Form
        setvisita({
            txtDoc: '',
            txtNombre: '',
            txtCelular: '',
            txtApto: '',
            txtFecha: '',
            txtHora: ''
        })
    }
 
    return ( 
       <Fragment>
           <div className="card">
               <div className="card-header bg-primary text-white h4 text-center">
                    Nuevo Visitante
               </div>
               <div className="card-body">
                    { error ? <div className="alert alert-danger" role="alert">Todos los campos son obligatorios</div> : null }

                    <form
                        onSubmit={submitVisita}
                    >
                        <div className="form-group">
                            <label htmlFor="txtDoc">Documento</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Documento"
                                    name="txtDoc"
                                    onChange={FnValidarCampos}
                                    value={txtDoc}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtNombre">Nombre</label>
                            <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="txtNombre"
                                    onChange={FnValidarCampos}
                                    value={txtNombre}
                            />
                        </div>
                        <div className="row">
                                <div className="form-group col-6 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="txtCelular">Celular</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Celular"
                                        name="txtCelular"
                                        onChange={FnValidarCampos}
                                        value={txtCelular}
                                    />
                                </div>
                                <div className="form-group col-6 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="txtApto">Apartamento</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Apartamento"
                                        name="txtApto"
                                        onChange={FnValidarCampos}
                                        value={txtApto}
                                    />
                                </div>
                        </div>
                        <div className="row">
                                <div className="form-group col-6 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="txtFecha">Fecha Ingreso</label>
                                    <input 
                                        type="date"
                                        className="form-control"
                                        name="txtFecha"
                                        onChange={FnValidarCampos}
                                        value={txtFecha}
                                    />
                                </div>
                                <div className="form-group col-6 col-md-12 col-lg-6 col-xl-6">
                                    <label htmlFor="txtHora">Hora Ingreso</label>
                                    <input 
                                        type="time"
                                        className="form-control"
                                        name="txtHora"
                                        onChange={FnValidarCampos}
                                        value={txtHora}
                                    />
                                </div>
                            </div>
                            <input
                                type="submit"
                                className="btn btn-block btn-outline-primary"
                                value="Guardar"
                            />
                    </form>
               </div>
               <div className="card-footer h4 text-right">
                   CodePic&copy;
               </div>
           </div>
       </Fragment>
     );
}
 
export default Formulario;