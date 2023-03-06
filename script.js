let porcentajeArteSonoro = 25;
let porcentajeComposicion = 18.75;
let porcentajeAutoria = 18.75;
let porcentajeMasterOwner = 37.5;

let valorProyecto
let arteSonoro
let compositor
let autor
let masterOwner

function mostrarValor() {
    let miImput = document.getElementById("valor");
    valorProyecto = miImput.value;
    resultadoPorcentajes()
}

function resultadoPorcentajes() {
    arteSonoro = calcularPorcentaje(valorProyecto, porcentajeArteSonoro);
    compositor = calcularPorcentaje(valorProyecto, porcentajeComposicion);
    autor = calcularPorcentaje(valorProyecto, porcentajeAutoria);
    masterOwner = calcularPorcentaje(valorProyecto, porcentajeMasterOwner);
    escribirValores();
}

let resultado = document.getElementById("resultado");


function calcularPorcentaje(valor, porcentaje) {
    let resultado = (valor * porcentaje) / 100;
    return resultado;
}


function escribirValores() {
    resultado.innerHTML = `<p>El valor del proyecto es: $${valorProyecto}</p>
                <p>El porcentaje para el productor es ${porcentajeMasterOwner}%, recibe: $${masterOwner}</p>
                <p>El porcentaje para el composicitor es ${porcentajeComposicion}%, recibe: $${compositor}</p> 
                <p>El porcentaje para el autor es ${porcentajeAutoria}%, recibe: $${autor}</p> 
                <p>El porcentaje para el representante (Arte Sonoro) es ${porcentajeArteSonoro}%, recibe: $${arteSonoro}</p> `;
}