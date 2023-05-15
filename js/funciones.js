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
    
    const key = '36357379-ccb5b718001fdd5c4fa0f30d8';
    const URL = `https://pixabay.com/api/?key=${key}&q=${inputBusqueda.value}`;
    console.log(URL)

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(resultado => ui.mostrarResultados(resultado.hits))
        .catch(error => console.log(error))

}
