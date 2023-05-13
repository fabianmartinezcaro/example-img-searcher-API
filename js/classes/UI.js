export default class UI{


    mostrarAlerta(contenedor, mensaje, tipo){
        const alerta = document.createElement('DIV');
        alerta.textContent = mensaje;
        let condicionCumplida = false;
        
        if(tipo === 'error'){
            alerta.classList.add('bg-red-200','border', 'rounded', 'border-red-500', 'text-center', 'text-red-700','text-lg', 'py-4', 'my-4');
            condicionCumplida = true;
        }

        if(condicionCumplida){
            setTimeout(() => {
                alerta.remove();
            }, 2300);
        }

        contenedor.appendChild(alerta);

    }

    limpiarHTML(contenedor){
        while(contenedor.firstChild){
            contenedor.remove(contenedor.firstChild);
        }
    }

}