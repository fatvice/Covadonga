//Ingreso de datos de la información
const cargarUsuarios=async()=>{
    let usuarios = await getUsuarios();
    let usuariosSelect = document.querySelector("#usuario-select");
    usuarios.forEach(u=>{
        let option = document.createElement("option");
        option.value = u.cod_usuario;
        option.innerText = u.nombre;
        usuariosSelect.appendChild(option);
    });
};
document.addEventListener("DOMContentLoaded",()=>{
    cargarUsuarios();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let usuario = document.querySelector("#usuario-select").value.trim();
    let tipoInfo = document.querySelector("#opcion-select").value.trim();
    let monto = +document.querySelector("#monto-txt").value;
    let fecha = document.querySelector("#fecha-txt").value;
    let errores = [];

    if(monto <= 0){
        errores.push("El monto ingresado debe ser mayor a 0");
    }
    if(fecha == ""){
        errores.push("Debe ingresar una fecha");
    }

    if(errores.length == 0){
        let info={};
        info.cod_usuario=usuario;
        info.monto=monto;
        if(tipoInfo=="1"){
            info.fecha_pago=fecha;
            let resultado = await crearPago(info);
            Swal.fire("Pago registrado");
        }else{
            info.fecha_deuda=fecha;
            let resultado = await crearDeuda(info);
            Swal.fire("Deuda registrada");
        }
    }else{
        Swal.fire({
            title:"Errores de validación",
            icon:"warning",
            html:errores.join("<br />")
        });
    }
});