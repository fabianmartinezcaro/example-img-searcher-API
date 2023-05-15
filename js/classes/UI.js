import { resultado } from "../selectores.js";

export default class UI{

    mostrarResultados(imagenes = []){

        this.limpiarHTML(resultado);

        imagenes.forEach(imagen => {

            console.log(imagen)

            const contenedorImagenes = document.createElement('DIV');
            contenedorImagenes.classList.add('grid', 'grid-cols-4', 'gap-4');

            const cardImagen = document.createElement('DIV');
            

        });
    }


    mostrarAlerta(contenedor, mensaje, tipo){

        const existeAlerta = document.querySelector('.bg-red-100');

        if(!existeAlerta){

            const alerta = document.createElement('DIV');
            alerta.textContent = mensaje;
            let condicionCumplida = false;
            
            if(tipo === 'error'){
                alerta.classList.add('bg-red-100','border', 'rounded-full', 'border-red-400', 'text-center', 'text-red-400','text-md', 'py-2', 'my-4');
                condicionCumplida = true;
            }

            contenedor.appendChild(alerta);
    
            if(condicionCumplida){
                setTimeout(() => {
                    alerta.remove();
                }, 2300);
            }

        }

    }

    limpiarHTML(contenedor){
        while(contenedor.firstChild){
            contenedor.remove(contenedor.firstChild);
        }
    }

}