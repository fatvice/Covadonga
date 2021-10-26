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
    let texto = document.querySelector("#texto-txt").value.trim();
    let errores = [];

    if(texto.length == 0){
        errores.push("Debe ingresar texto");
    }

    if(errores.length == 0){
        let info={};
        info.cod_usuario=usuario;
        info.tipo_info=tipoInfo;
        info.texto=texto;
        let resultado = await crearReclamoSugerencia(info);
        if(tipoInfo=="1"){
            Swal.fire("Reclamo registrado");
        }else{
            Swal.fire("Sugerencia registrada");
        }
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        });
    }
});
