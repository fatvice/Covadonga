const cargarTipos = ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let option1 = document.createElement("option");
    option1.innerText = "Reclamo";
    option1.value = "0";
    let option2 = document.createElement("option");
    option2.innerText = "Sugerencia";
    option2.value = "1";
    filtroCbx.appendChild(option1);
    filtroCbx.appendChild(option2);
};
const actualizar = async function(){
    let cod_info = this.cod_info;
    let reclamoSugerencia = await obtenerPorCodReclamoSugerencia(cod_info);
    reclamoSugerencia.texto = document.querySelector("#texto-txt").value.trim();
    await actualizarReclamoSugerencia(reclamoSugerencia);
    await Swal.fire("Texto actualizado, se recargará la página");
    window.location.href="verreclamosysugerencias";
}
const iniciarEliminacion = async function(){
    let cod_info = this.cod_info;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarReclamoSugerencia(cod_info)){
            let reclamosSugerencias = await getReclamosSugerencias();
            cargarTabla(reclamosSugerencias);
            Swal.fire("Eliminado", "Se ha eliminado el reclamo/sugerencia", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const iniciarActualizacion = async function(){
    let cod_info = this.cod_info;
    let reclamoSugerencia = await obtenerPorCodReclamoSugerencia(cod_info);
    let ingresoTexto = document.querySelector("#texto-txt").value = reclamoSugerencia.texto;
    let botonAct = document.querySelector("#actualizar-btn");
    botonAct.cod_info = cod_info;
    botonAct.addEventListener("click", actualizar);
}

const cargarTabla = (reclamosSugerencias, usuarios)=>{
    let tbody = document.querySelector("#tbody-reclamo-sugerencia");
    tbody.innerHTML = "";
    for(let i=0; i < reclamosSugerencias.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = reclamosSugerencias[i].cod_usuario;
        let nombre = usuarios[i];
        let tdNombre = document.createElement("td");
        tdNombre.innerText = nombre;
        let tdTexto = document.createElement("td");
        tdTexto.innerText = reclamosSugerencias[i].texto;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_info = reclamosSugerencias[i].cod_info;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_info = reclamosSugerencias[i].cod_info;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdCod);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTexto);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let reclamosSugerencias = await getReclamosSugerencias(filtro);
    cargarTabla(reclamosSugerencias);
});
document.addEventListener("DOMContentLoaded", async ()=>{
    let reclamosSugerencias = await getReclamosSugerencias();
    let usuarios = [];
    for(let i =0;i<reclamosSugerencias.length;i++){
        let usuario = await obtenerPorCodUsuario(reclamosSugerencias[i].cod_usuario);
        let nombre = usuario.nombre;
        usuarios.push(nombre);
    }

    cargarTabla(reclamosSugerencias, usuarios);
});