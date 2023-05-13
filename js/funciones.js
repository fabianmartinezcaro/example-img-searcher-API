import { inputBusqueda } from "./selectores.js";
import UI from "./classes/UI.js";

const ui = new UI();

export function validarBusqueda(evento){
    evento.preventDefault();

    if(inputBusqueda.value === ''){
        ui.mostrarAlerta(formulario, 'El campo es obligatorio, por favor ingrese una busqueda...', 'error');
        return;
    }

    cargarBusqueda();

}

export function cargarBusqueda(){

}
