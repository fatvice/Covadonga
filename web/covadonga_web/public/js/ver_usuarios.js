//CODIGO DE RUT.JS
function clean(rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}

function validate(rut) {
  if (typeof rut !== 'string') {
    return false
  }

  // if it starts with 0 we return false
  // so a rut like 00000000-0 will not pass
  if (/^0+/.test(rut)) {
    return false
  }

  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false
  }

  rut = clean(rut)

  let t = parseInt(rut.slice(0, -1), 10)
  let m = 0
  let s = 1

  while (t > 0) {
    s = (s + (t % 10) * (9 - (m++ % 6))) % 11
    t = Math.floor(t / 10)
  }

  const v = s > 0 ? '' + (s - 1) : 'K'
  return v === rut.slice(-1)
}

function format(rut) {
  rut = clean(rut)

  let result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (let i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}

function getCheckDigit(input) {
  const rut = Array.from(clean(input), Number)

  if (rut.length === 0 || rut.includes(NaN)) {
    throw new Error(`"${input}" as RUT is invalid`)
  }

  const modulus = 11
  const initialValue = 0
  const sumResult = rut
    .reverse()
    .reduce(
      (accumulator, currentValue, index) =>
        accumulator + currentValue * ((index % 6) + 2),
      initialValue
    )

  const checkDigit = modulus - (sumResult % modulus)

  if (checkDigit === 10) {
    return 'K'
  } else if (checkDigit === 11) {
    return '0'
  } else {
    return checkDigit.toString()
  }
}

function mostrarContrasena() {
  var tipo = document.querySelector("#pass-txt");
  if (tipo.type == 'password') {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}
function validar(usuario) {

}
document.querySelector("#pass-btn").addEventListener("click", () => {
  mostrarContrasena();
});

const cargarMorosos = () => {
  let filtroCbx = document.querySelector("#filtro-cbx");
  let option1 = document.createElement("option");
  option1.innerText = "No Morosos";
  option1.value = "0";
  filtroCbx.appendChild(option1);
  let option2 = document.createElement("option");
  option2.innerText = "Morosos";
  option2.value = "1";
  filtroCbx.appendChild(option2);
}

const iniciarEliminacion = async function () {
  let cod_usuario = this.cod_usuario;
  let resp = await Swal.fire({
    title: "Esta seguro?",
    text: "Esta acción es irreversible",
    icon: "error",
    showCancelButton: true
  });
  if (resp.isConfirmed) {
    if (await eliminarUsuario(cod_usuario)) {
      let usuarios = await getUsuarios();
      cargarTabla(usuarios);
      Swal.fire("Usuario eliminado", "Usuario eliminado correctamente", "info");
    }
    else {
      Swal.fire("Error", "No se puede atender la solicitud", "error");
    }
  } else {
    Swal.fire("Cancelado a peticion del usuario");
  }
}

const iniciarCambioPassword = async function () {
  let cod_usuario = this.cod_usuario;
  let usuario = await obtenerPorCodUsuario(cod_usuario);
  let molde = document.querySelector(".molde-password").cloneNode(true);
  molde.querySelector("#rutpass-txt").value = usuario.rut;
  molde.querySelector("#nombrepass-txt").value = usuario.nombre;
  molde.querySelector("#actualizarpass-btn").cod_usuario = cod_usuario;
  molde.querySelector("#actualizarpass-btn").addEventListener("click", actualizarPassword);
  await Swal.fire({
    title: "Actualizar",
    html: molde,
    confirmButtonText: "Cerrar"
  });
}
const iniciarActualizacion = async function () {
  let cod_usuario = this.cod_usuario;
  let usuario = await obtenerPorCodUsuario(cod_usuario);
  let molde = document.querySelector(".molde-actualizar").cloneNode(true);
  molde.querySelector("#rut-txt").value = usuario.rut;
  molde.querySelector("#nombre-txt").value = usuario.nombre;
  molde.querySelector("#estacionamiento-txt").value = usuario.estacionamiento;
  molde.querySelector("#bodega-txt").value = usuario.bodega;
  if (usuario.moroso == '0') {
    molde.querySelector("#moroso-no-rb").checked = true;
  } else {
    molde.querySelector("#moroso-si-rb").checked = true;
  }
  molde.querySelector("#actualizar-btn").cod_usuario = cod_usuario;
  molde.querySelector("#actualizar-btn").addEventListener("click", actualizar);
  await Swal.fire({
    title: "Actualizar",
    html: molde,
    confirmButtonText: "Cerrar"
  });
};

const actualizarPassword = async function () {
  let errores = [];
  let cod_usuario = this.cod_usuario;
  let usuario = await obtenerPorCodUsuario(cod_usuario);
  let molde = this.parentNode.parentNode;
  oldPassword = usuario['password'];
  confirmOldPassword = molde.querySelector("#olderpass-txt").value;
  newPassword = molde.querySelector("#pass-txt").value;
  confirmPassword = molde.querySelector("#confirmpass-txt").value;
  if ((newPassword === "") || (confirmOldPassword === "")) {
    errores.push("Debe ingresar una contraseña en los campos");
  }
  if (!(oldPassword === confirmOldPassword)) {
    errores.push("Debe ingresar la contraseña anterior");
  }
  if (newPassword.length < 4) {
    errores.push("La contraseña debe tener al menos 4 caracteres");
  }
  if (!(newPassword === confirmPassword)) {
    errores.push("Las contraseñas deben coincidir");
  }

  if (errores.length == 0) {
    usuario.password = molde.querySelector("#pass-txt").value.trim();
    await cambiarPassword(usuario);
    await Swal.close();
    let filtro = document.querySelector("#filtro-cbx").value;
    let usuarios = await getUsuarios(filtro);
    cargarTabla(usuarios);

  }
};
const actualizar = async function () {
  let errores = [];
  let cod_usuario = this.cod_usuario;
  let usuario = await obtenerPorCodUsuario(cod_usuario);
  let molde = this.parentNode.parentNode;
  rut = molde.querySelector("#rut-txt").value;
  nombre = molde.querySelector("#nombre-txt").value.trim();

  estacionamiento = molde.querySelector("#estacionamiento-txt").value.trim();
  bodega = molde.querySelector("#bodega-txt").value.trim();

  if (estacionamiento > 70 || estacionamiento < 0) {
    errores.push("Debe ingresar un estacionamiento valido menor a 70 y mayor a -1");
  }
  if (bodega > 20 || bodega < 0) {
    errores.push("Debe ingresar una bodega valida menor a 20 y mayor a -1");
  }

  if (errores.length == 0) {
    usuario.rut = molde.querySelector("#rut-txt").value;
    usuario.nombre = molde.querySelector("#nombre-txt").value.trim();
    usuario.estacionamiento = molde.querySelector("#estacionamiento-txt").value.trim();
    usuario.bodega = molde.querySelector("#bodega-txt").value.trim();
    if (molde.querySelector("#moroso-si-rb").checked) {
      usuario.moroso = "1";
    } else {
      usuario.moroso = "0";
    }
    await actualizarUsuario(usuario);
    await Swal.close();
    let filtro = document.querySelector("#filtro-cbx").value;
    let usuarios = await getUsuarios(filtro);
    cargarTabla(usuarios);

  } else {
    Swal.fire({
      title: "Errores de validacion",
      icon: "warning",
      html: errores.join("<br />")
    })
  }
}

const cargarTabla = (usuarios) => {
  let tbody = document.querySelector("#tbody-usuario");
  tbody.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    let tr = document.createElement("tr");
    let tdRut = document.createElement("td");
    tdRut.innerText = format(usuarios[i].rut);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = usuarios[i].nombre;
    let tdEstacionamiento = document.createElement("td");
    tdEstacionamiento.classList.add("text-center");
    tdEstacionamiento.innerText = usuarios[i].estacionamiento;
    let tdBodega = document.createElement("td");
    tdBodega.classList.add("text-center");
    tdBodega.innerText = usuarios[i].bodega;
    let tdMoroso = document.createElement("td");
    if (usuarios[i].moroso == "0") {
      tdMoroso.innerText = "No Moroso";
    } else {
      tdMoroso.innerText = "Moroso";
    }
    let tdAcciones = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "mx-2");
    botonEliminar.cod_usuario = usuarios[i].cod_usuario;
    botonEliminar.addEventListener("click", iniciarEliminacion);
    tdAcciones.appendChild(botonEliminar);
    let botonActualizar = document.createElement("button");
    botonActualizar.innerText = "Actualizar";
    botonActualizar.classList.add("btn", "btn-info", "mx-2");
    botonActualizar.cod_usuario = usuarios[i].cod_usuario;
    botonActualizar.addEventListener("click", iniciarActualizacion);
    let botonPassword = document.createElement("button");
    botonPassword.innerText = "Cambiar contraseña";
    botonPassword.classList.add("btn", "btn-success");
    botonPassword.cod_usuario = usuarios[i].cod_usuario;
    botonPassword.addEventListener("click", iniciarCambioPassword);
    tdAcciones.appendChild(botonActualizar);
    tdAcciones.appendChild(botonPassword);
    tr.appendChild(tdRut);
    tr.appendChild(tdNombre);
    tr.appendChild(tdEstacionamiento);
    tr.appendChild(tdBodega);
    tr.appendChild(tdMoroso);
    tr.appendChild(tdAcciones);
    tbody.appendChild(tr);
  }
}

document.querySelector("#filtro-cbx").addEventListener("change", async () => {
  let filtro = document.querySelector("#filtro-cbx").value;
  let usuarios = await getUsuarios(filtro);
  cargarTabla(usuarios);
})

document.addEventListener("DOMContentLoaded", async () => {
  cargarMorosos();
  let usuarios = await getUsuarios();
  cargarTabla(usuarios);
})




// const actualizar=async function(){
//     let errores = [];
//     let pass = document.querySelector("#pass-txt").value.trim();
//     let confirmPass = document.querySelector("#confirmpass-txt").value.trim();
//     let estacionamiento = +document.querySelector("#estacionamiento-txt").value.trim();
//     let bodega = +document.querySelector("#bodega-txt").value.trim();

//     let cod_usuario = this.cod_usuario;
//     let usuario = await obtenerPorCodUsuario(cod_usuario);

//     if(pass===""){
//         errores.push("Debe ingresar una contraseña");
//     }
//     if(pass.length<4){
//         errores.push("La contraseña debe tener al menos 4 caracteres");
//     }
//     if(!(pass===confirmPass)){
//       errores.push("Las contraseñas deben coincidir");
//     }
//     if(estacionamiento>70 || estacionamiento<0){
//         errores.push("Debe ingresar un estacionamiento valido menor a 70 y mayor a -1");
//     }
//     if(bodega>20 || bodega<0){
//         errores.push("Debe ingresar una bodega valida menor a 20 y mayor a -1");
//     }

//     if (errores.length==0){
//         usuario.rut = document.querySelector("#rut-txt").value;
//         usuario.nombre = document.querySelector("#nombre-txt").value.trim();
//         usuario.password = document.querySelector("#pass-txt").value;
//         usuario.estacionamiento = document.querySelector("#estacionamiento-txt").value.trim();
//         usuario.bodega = document.querySelector("#bodega-txt").value.trim();
//         if(document.getElementById("moroso-si-rb").checked){
//             usuario.moroso = "1";
//         }else{
//             usuario.moroso = "0";
//         }
//         await actualizarUsuario(usuario);
//         await Swal.fire("Usuario actualizado, se recargará la página");
//         window.location.href="verusuarios";

//     }else{
//         Swal.fire({
//             title:"Errores de validacion",
//             icon:"warning",
//             html:errores.join("<br />")
//         }) 
//     }
// }

// const iniciarActualizacion=async function(){
//     let cod_usuario=this.cod_usuario;
//     let usuario = await obtenerPorCodUsuario(cod_usuario);
//     let ingresoRut = document.querySelector("#rut-txt").value=usuario.rut;
//     let ingresoNombre = document.querySelector("#nombre-txt").value=usuario.nombre;
//     let ingresoPassword = document.querySelector("#pass-txt").value=usuario.password;
//     let ingresoEstacionamiento = document.querySelector("#estacionamiento-txt").value=usuario.estacionamiento;
//     let ingresoBodega = document.querySelector("#bodega-txt").value=usuario.bodega;
//     if(usuario.moroso == "0"){
//         let moroso = document.querySelector("#moroso-no-rb").checked = true;
//     }else{
//         let moroso = document.querySelector("#moroso-si-rb").checked = true;
//     }
//     let botonAct = document.querySelector("#actualizar-btn");
//     console.log(botonAct);
//     botonAct.cod_usuario = cod_usuario;
//     botonAct.addEventListener("click", actualizar);
// }



  // usuario.rut = molde.querySelector("#rut-txt").value;
  // usuario.nombre = molde.querySelector("#nombre-txt").value.trim();
  // usuario.password = molde.querySelector("#pass-txt").value.trim();
  // usuario.estacionamiento = molde.querySelector("#estacionamiento-txt").value.trim();
  // usuario.bodega = molde.querySelector("#bodega-txt").value.trim();
  // if (molde.querySelector("#moroso-si-rb").checked) {
  //   usuario.moroso = "1";
  // } else {
  //   usuario.moroso = "0";
  // }
  // console.log(usuario);
  // await actualizarUsuario(usuario);
  // await Swal.close();
  // let filtro = document.querySelector("#filtro-cbx").value;
  // let usuarios = await getUsuarios(filtro);
  // cargarTabla(usuarios);


    // if ((newPassword === "") || (confirmOldPassword === "")) {
  //   errores.push("Debe ingresar una contraseña en los campos");
  // }
  // if (!(oldPassword === confirmOldPassword)) {
  //   errores.push("Debe ingresar la contraseña anterior");
  // }
  // if (newPassword.length < 4) {
  //   errores.push("La contraseña debe tener al menos 4 caracteres");
  // }
  // if (!(newPassword === confirmPassword)) {
  //   errores.push("Las contraseñas deben coincidir");
  // }


    // oldPassword = usuario['password'];
  // confirmOldPassword = molde.querySelector("#olderpass-txt").value;
  // newPassword = molde.querySelector("#pass-txt").value;
  // confirmPassword = molde.querySelector("#confirmpass-txt").value;