const precio = 200;
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;
const btnResumen = document.getElementById("btn-resumen");
const totalOuput = document.getElementById("total");
let total = 0;

btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    resumen();
});

const resumen = () => {
    total = generarResumen();
    totalOuput.innerHTML = `${total}`
}

function generarResumen() {
    let categoria = document.getElementById("input-categoria");
    let cantidad = parseFloat(document.getElementById("input-cantidad").value);

    if (categoria.value == 'estudiante') {
        let descuentoAplicado = precio - (precio * descuentoEstudiante);
        total = descuentoAplicado * cantidad;
    } else if (categoria.value == 'trainee') {
        let descuentoAplicado = precio - (precio * descuentoTrainee);
        total = descuentoAplicado * cantidad;
    } else if (categoria.value == 'junior') {
        let descuentoAplicado = precio - (precio * descuentoJunior);
        total = descuentoAplicado * cantidad;
    }

    return total;
}

const paginaPrincipal = () => {
    window.location.href = "./index.html";
}