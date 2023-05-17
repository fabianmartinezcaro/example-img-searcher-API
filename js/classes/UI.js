import { resultado } from "../selectores.js";

export default class UI{

    mostrarResultados(imagenes){

        this.limpiarHTML(resultado);

        imagenes.forEach(imagen => {

            console.log(imagen)
            const {comments, downloads, likes, views, largeImageURL, previewURL} = imagen;

            resultado.innerHTML += `
                <div class="w-1/2 md:w-1/3 lg:w-1/4">
                    <div class="m-4 p-2 border-2 border-gray-800">
                        <img class="w-full border-1 border-gray-800" src="${previewURL}">
                        <div class="flex flex-row space-x-2 text-sm">
                            <p class="font-medium text-gray-600"><span class="font-bold text-blue-600">${likes}</span> Me Gustas</p>
                            <p class="font-medium text-gray-600"><span class="font-bold text-blue-600">${comments}</span> Comments</p>
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