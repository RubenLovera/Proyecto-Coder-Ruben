

document.getElementById('cotizarBtn').addEventListener('click', function() {
    alert('Bienvenido a Seguros QUALYTAS');
    
    let nombreUsuario = prompt('Ingresa tu nombre y apellido');
    let documentoUsuario = parseInt(prompt('Muy bien, ahora ingresa tu DNI'));
    
    const planBronce = 150; 
    const planPlata = 300;
    const planOro = 450;
    
    alert('Excelente ' + nombreUsuario + '. Estos son nuestros seguros: a) planBronce b) planPlata c) planOro');
    
    let seguroIngresadoUsuario = prompt('¿Qué seguro deseas contratar?');
    let precioSeleccionado;

    switch (seguroIngresadoUsuario) {
        case 'planBronce':
            precioSeleccionado = planBronce;
            break;
        case 'planPlata':
            precioSeleccionado = planPlata;
            break;
        case 'planOro':
            precioSeleccionado = planOro;
            break;
        default:
            alert('Lo siento, el plan ingresado no es válido. Por favor, intenta de nuevo.');
            return; // Salimos de la función si no es válido
    }

    alert('Has seleccionado el plan ' + seguroIngresadoUsuario + ', el costo inicial es de $' + precioSeleccionado + '. En breve te enviaremos un mail!');
    
    // Función para calcular el incremento anual
    calcularIncrementoAnual(precioSeleccionado);
});

function calcularIncrementoAnual(precioInicial) {
    let incrementoAnual = 0.05; // Incremento del 5% por año
    let años = 5; // Calcular para los próximos 5 años
    let mensaje = "Proyección del costo para los próximos " + años + " años:\n";

    for (let año = 1; año <= años; año++) {
        precioInicial *= (1 + incrementoAnual);
        mensaje += "Año " + año + ": $" + precioInicial.toFixed(2) + "\n";
    }

    alert(mensaje);
}


