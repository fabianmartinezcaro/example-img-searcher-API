import { resultado } from "../selectores.js";

export default class UI{

    mostrarResultados(imagenes){

        this.limpiarHTML(resultado);

        imagenes.forEach(imagen => {

            console.log(imagen)
            const {comments, downloads, likes, views, largeImageURL, previewURL} = imagen;

            function numsToK(numero){
                if(numero > 10000){
                    let resultado = numero / 10000;
                    resultado = resultado.toFixed(1) + 'k';
                    return resultado;
                }
            }

            resultado.innerHTML += `
                <div class="w-full md:w-1/2 lg:w-1/4">
                    <div class="h-auto rounded-lg m-4 p-2 shadow-lg bg-white">
                        <img class="w-full rounded-md" src="${previewURL}">
                        <div class="flex flex-row space-x-2 text-sm mt-2">
                            <p class="font-medium text-gray-600"><span class="font-bold text-blue-600">${likes}</span> Me Gustas</p>
                            <p class="font-medium text-gray-600"><span class="font-bold text-blue-600">${numsToK(downloads)}</span> Descargas</p>
                        </div>

                        <div class="">
                            
                        </div>

                        <div>
                            <button class="rounded-md bg-blue-800 text-white text-sm mt-4 py-1 px-4" href=${previewURL}>Descargar</button>
                            <button class="rounded-md bg-gray-800 text-white text-sm mt-4 py-1 px-4">Ver Imagen</button>
                        </div>
                    </div>
                </div>
            `    

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