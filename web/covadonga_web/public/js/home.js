function mostrarContrasena() {
    var tipo = document.getElementById("password-txt");
    var icon = document.getElementById("icon");

    if (tipo.type == 'password') {
        tipo.type = "text";
        icon.classList.toggle('fa-eye-slash');
        icon.classList.toggle('fa-eye');
    } else {
        tipo.type = "password";
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    }
};
// const verificar = async function(){
//     let cod_usuario = this.cod_usuario;
//     let usuario = await obtenerPorCodUsuario(cod_usuario);
//     console.log(usuario);
// };

// document.querySelector("#password-btn").addEventListener("click",()=>{
//     mostrarContrasena();
//   });
// document.querySelector("#ingresar-btn").addEventListener("click",()=>{
//     cod_usuario =parseInt(document.querySelector("#codUsuario-txt").value);
//     usuarios = this.usuarios;
//     if (!(cod_usuario in usuarios)){
//         console.log("no ta");

//     }
// });

// document.addEventListener("DOMContentLoaded",async()=>{
//     let usuarios = await getUsuarios();
//     document.getElementById("password-btn").usuarios = usuarios;
// });
