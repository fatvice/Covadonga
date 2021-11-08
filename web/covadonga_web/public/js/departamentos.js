const cargarEstados = () => {
    let filtroCbx = document.querySelector("#filtro-cbx");
    let option = document.createElement("option");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    option.innerText = "Sin dueño";
    option1.innerText = "Arrendado por dias";
    option2.innerText = "Arrendado por año";
    option3.innerText = "Con dueño";
    option.value = "0";
    option1.value = "1";
    option2.value = "2";
    option3.value = "3";
    filtroCbx.appendChild(option);
    filtroCbx.appendChild(option1);
    filtroCbx.appendChild(option2);
    filtroCbx.appendChild(option3);
}
const iniciarActualizacionEstado = async function(){

}
const cargarTabla = (departamentos) => {
    let tbody = document.getElementById("tbody-departamento");
    tbody.innerHTML = "";
    for (let i = 0; i < departamentos.length; i++) {
        let tr = document.createElement("tr");
        let tdDueno = document.createElement("td");
        let tdNumeroDepto = document.createElement("td");
        let tdNumeroTorre = document.createElement("td");
        let tdEstado = document.createElement("td");
        let tdAcciones = document.createElement("td");
        // ToDo: cambiar esto con las tablas relacionadas
        tdDueno.innerText = "nombre persona";
        tdNumeroDepto.innerText = departamentos[i].numero_depto;
        tdNumeroTorre.innerText = departamentos[i].numero_torre;
        estado = departamentos[i].estado;
        switch (estado) {
            // sin dueño
            case "0": tdEstado.innerText = "Sin dueño";
                break;
            // arrendado por dias
            case "1": tdEstado.innerText = "Arrendado por dias";
                break;
            // arrendado por año
            case "2": tdEstado.innerText = "Arrendado por año";
                break;
            // con dueño
            case "3": tdEstado.innerText = "Con dueño";
                break;
        }
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Cambiar estado Departamento";
        botonActualizar.classList.add("btn", "btn-success");
        botonActualizar.cod_depto = departamentos[i].cod_depto;
        botonActualizar.addEventListener("click", iniciarActualizacionEstado);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdDueno);
        tr.appendChild(tdNumeroDepto);
        tr.appendChild(tdNumeroTorre);
        tr.appendChild(tdEstado);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    cargarEstados();
    let departamentos = await getDepartamentos();
    cargarTabla(departamentos);
})
document.querySelector("#filtro-cbx").addEventListener("change", async () => {
    let filtro = document.querySelector("#filtro-cbx").value;
    let departamentos = await getDepartamentos(filtro);
    cargarTabla(departamentos);
  })