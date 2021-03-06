import React,{ useState } from "react";
import { itemInicial } from "./GridProduct";

export default function ProductForm(props){
    const estadoInicialForm = {
        id: null,
        nombre:'',
        precio:''
    };
    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);
    const gestionarCamposForm = event => {
        const {name, value} = event.target;
        cambiarEstadoForm({...estadoForm,[name]:value});
    }

    const onSubmitForm = (ev) =>{
        ev.preventDefault();
        alEnviarForm(estadoForm);
        cambiarEstadoForm(estadoInicialForm);
    }
    const alEnviarForm = (estado) => {
        const idS = itemInicial.length + 10;
        const item = { ...estado, id: idS };
        itemInicial.push(item);
    }
    return(
        <form onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="nameProduct" className="form-label">nombre</label>
                <input type="text" name="nombre"  className="form-control" id="nameProduct" value={estadoForm.nombre} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <label htmlFor="priceProduct" className="form-label">precio</label>
                <input type="text" name="precio" className="form-control" id="priceProduct" value={estadoForm.precio} onChange={gestionarCamposForm}/>
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div> 
        </form>
    );
};