
/*
// VAMOS A HACER UN COTIZADOR DE SEGUROS CON JAVASCRIPT

alert('Bienvenido a Seguros QUALYTAS')

let NombreUsuario = prompt('ingresa tu nombre y apellido')
let documentoUsuario = parseInt(prompt('Muy bien, ahora ingresa tu DNI'))


// AHORA LE MOSTRAMOS LOS PLANES QUE TENEMOS

alert('Excelente' + ' ' + NombreUsuario + ' ' + 'Estos son nuestros seguros a) planBronce b) planPlata c) planOro')

// AHORA COTIZAMOS 

let SeguroIngresadoUsuario = prompt('¿Qué seguro deseas contratar?')
if(SeguroIngresadoUsuario = planBronce){
    alert('Has seleccionado el planBronce, en breve te enviaremos un mail!')
}else if(SeguroIngresadoUsuario = planPlata){
    alert('Has seleccionado el planPlata, en breve te enviaremos un mail!')
}else if(SeguroIngresadoUsuario = planOro){
    alert('Has seleccionado el planOro, en breve te enviaremos un mail!')

}


// PLANES

let planBronce = 150 
let planPlata = 300
let planOro = 450 

*/

// VAMOS A HACER UN COTIZADOR DE SEGUROS CON JAVASCRIPT

document.getElementById('cotizarBtn').addEventListener('click', function() {
    alert('Bienvenido a Seguros QUALYTAS');
    
    // Es una buena práctica declarar las variables al inicio del script
    let nombreUsuario = prompt('Ingresa tu nombre y apellido');
    let documentoUsuario = parseInt(prompt('Muy bien, ahora ingresa tu DNI'));
    
    // Definir precios de los planes aquí para poder usarlos en la comparación más adelante
    const planBronce = 150; 
    const planPlata = 300;
    const planOro = 450;
    
    // AHORA LE MOSTRAMOS LOS PLANES QUE TENEMOS
    alert('Excelente ' + nombreUsuario + '. Estos son nuestros seguros: a) planBronce b) planPlata c) planOro');
    
    // AHORA COTIZAMOS
    let seguroIngresadoUsuario = prompt('¿Qué seguro deseas contratar?');
    
    // Usar el operador de comparación '===' para comparar valores
    if (seguroIngresadoUsuario === 'planBronce') {
        alert('Has seleccionado el plan Bronce, el costo es de $' + planBronce + '. En breve te enviaremos un mail!');
    } else if (seguroIngresadoUsuario === 'planPlata') {
        alert('Has seleccionado el plan Plata, el costo es de $' + planPlata + '. En breve te enviaremos un mail!');
    } else if (seguroIngresadoUsuario === 'planOro') {
        alert('Has seleccionado el plan Oro, el costo es de $' + planOro + '. En breve te enviaremos un mail!');
    } else {
        // Es bueno tener un manejo de errores en caso de que no se ingrese un plan válido
        alert('Lo siento, el plan ingresado no es válido. Por favor, intenta de nuevo.');
    }
});




