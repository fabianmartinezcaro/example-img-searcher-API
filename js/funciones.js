import { inputBusqueda } from "./selectores.js";
import UI from "./classes/UI.js";

const ui = new UI();
const registroPorPagina = 40;
export let totalPaginas;

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
    const URL = `https://pixabay.com/api/?key=${key}&q=${inputBusqueda.value}&per_page=${registroPorPagina}`;

    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            ui.mostrarResultados(resultado.hits);
        })
}


// Generador que va a registrar la cantidad de elementos de acuerdo a las páginas
export function *generadorPaginas(totalPaginas){
    for(let i = 1; i <= totalPaginas; i++){
        yield i;
    }
}


export function calcularPaginas(total){
    return parseInt(Math.ceil(total / registroPorPagina));
}


// Agrega el simbolo K en números con valores grandes EJ: 12.2k
export function numsToK(numero){
    if(numero > 10000){
        let resultado = numero / 10000;
        resultado = resultado.toFixed(1) + 'k';
        return resultado;
    }
}
