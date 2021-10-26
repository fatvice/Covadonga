const actualizarDeuda = async function(){
    let cod_deuda = this.cod_deuda;
    let deuda = await obtenerPorCodDeuda(cod_deuda);
    deuda.monto = document.querySelector("#monto-txt").value.trim();
    deuda.fecha_deuda = document.querySelector("#fecha-txt").value;
    await actualizarDeuda(deuda);
    await Swal.fire("Deuda actualizada, se recargará la página");
    window.location.href="verpagosydeudas";
}
const actualizarPago = async function(){
    let cod_pago = this.cod_pago;
    let pago = await obtenerPorCodPago(cod_pago);
    pago.monto = document.querySelector("#monto-txt").value.trim();
    pago.fecha_pago = document.querySelector("#fecha-txt").value;
    await actualizarPago(pago);
    await Swal.fire("Pago actualizado, se recargará la página");
    window.location.href="verpagosdeudas";
}

const iniciarEliminacionDeuda = async function(){
    let cod_deuda = this.cod_deuda;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarDeuda(cod_deuda)){
            let deudas = await getDeudas();
            cargarTablaDeudas(deudas);
            Swal.fire("Eliminado", "Se ha eliminado la deuda", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const iniciarEliminacionPago = async function(){
    let cod_pago = this.cod_pago;
    let resp = await Swal.fire({title:"¿Seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("Eliminando");
        if(await eliminarPago(cod_pago)){
            let pagos = await getPagos();
            cargarTablaPagos(pagos);
            Swal.fire("Eliminado", "Se ha eliminado el pago", "info");
        }else{
            Swal.fire("Error", "No se pudo realizar la eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Se ha cancelado la petición de eliminación", "info");
    }
};
const iniciarActualizacionDeuda = async function(){
    let cod_deuda = this.cod_deuda;
    let deuda = await obtenerPorCodDeuda(cod_deuda);
    let ingresoMonto = document.querySelector("#monto-txt").value = deuda.monto;
    let ingresoFecha = document.querySelector("#fecha-txt").value = deuda.fecha_deuda;
    let botonAct = document.querySelector("#actualizar-btn");
    botonAct.cod_deuda = cod_deuda;
    botonAct.addEventListener("click", actualizarDeuda);
}
const iniciarActualizacionPago = async function(){
    let cod_pago = this.cod_pago;
    let pago = await obtenerPorCodPago(cod_pago);
    let ingresoMonto = document.querySelector("#monto-txt").value = pago.monto;
    let ingresoFecha = document.querySelector("#fecha-txt").value = pago.fecha_pago;
    let botonAct = document.querySelector("#actualizar-btn");
    botonAct.cod_pago = cod_pago;
    botonAct.addEventListener("click", actualizarPago);
}

const cargarTablaDeudas = (deudas, usuarios)=>{
    let tbody = document.querySelector("#tbody-pago-deuda");
    tbody.innerHTML = "";
    for(let i=0; i < deudas.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = deudas[i].cod_usuario;
        let nombre = usuarios[i];
        let tdNombre = document.createElement("td");
        tdNombre.innerText = nombre;
        let tdMonto = document.createElement("td");
        tdMonto.innerText = ("$" + deudas[i].monto);
        let tdFecha = document.createElement("td");
        tdFecha.innerText = deudas[i].fecha_deuda;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_deuda = deudas[i].cod_deuda;
        botonEliminar.addEventListener("click", iniciarEliminacionDeuda);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_info = deudas[i].cod_deuda;
        botonActualizar.addEventListener("click", iniciarActualizacionDeuda);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdCod);
        tr.appendChild(tdNombre);
        tr.appendChild(tdMonto);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
const cargarTablaPagos = (pagos, usuarios)=>{
    let tbody = document.querySelector("#tbody-pago-deuda");
    tbody.innerHTML = "";
    for(let i=0; i < pagos.length; ++i){
        let tr = document.createElement("tr");
        let tdCod = document.createElement("td");
        tdCod.innerText = pagos[i].cod_usuario;
        let nombre = usuarios[i];
        let tdNombre = document.createElement("td");
        tdNombre.innerText = nombre;
        let tdMonto = document.createElement("td");
        tdMonto.innerText = ("$" + pagos[i].monto);
        let tdFecha = document.createElement("td");
        tdFecha.innerText = pagos[i].fecha_pago;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.cod_pago = pagos[i].cod_pago;
        botonEliminar.addEventListener("click", iniciarEliminacionPago);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_info = pagos[i].cod_pago;
        botonActualizar.addEventListener("click", iniciarActualizacionPago);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdCod);
        tr.appendChild(tdNombre);
        tr.appendChild(tdMonto);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    if(filtro == "deudas"){
        let deudas = await getDeudas(filtro);
        cargarTablaDeudas(deudas);
    }else{
        let pagos = await getPagos(filtro);
        cargarTablaPagos(pagos);
    }
});
document.addEventListener("DOMContentLoaded", async ()=>{
    let deudas = await getDeudas();
    let usuarios = [];
    for(let i = 0; i < deudas.length; i++){
        let usuario = await obtenerPorCodUsuario(deudas[i].cod_usuario);
        let nombre = usuario.nombre;
        usuarios.push(nombre);
    }
    cargarTablaDeudas(deudas, usuarios);
});