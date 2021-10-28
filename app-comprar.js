const precio = 200;
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;
const container = document.getElementById("seccion");
const btnBorrar = document.getElementById("btn-borrar");
const btnResumen = document.getElementById("btn-resumen");
const categoria = document.getElementById("input-categoria");
const cantidad = document.getElementById("input-cantidad");
const resumenTotal = document.getElementById("total")
let total = 0;

const resumen = ()=> {
    total = generarResumen();
    resumenTotal.innerHTML = `${total}`
}

function generarResumen() {
    if(categoria.value == 'estudiante') {
        let descuentoAplicado = precio * descuentoEstudiante;
        total = descuentoAplicado * cantidad;
    } else if (categoria.value == 'trainee'){
        let descuentoAplicado = precio * descuentoTrainee;
        total = descuentoAplicado * cantidad;
    } else if (categoria.value == 'junior'){
        let descuentoAplicado = precio * descuentoJunior;
        total = descuentoAplicado * cantidad;
    }
    console.log(total);
    return total;
}

const paginaPrincipal = () => {
    window.location.href="./index.html";
}