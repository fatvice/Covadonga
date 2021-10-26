//CODIGO DE RUT.JS
function clean (rut) {
    return typeof rut === 'string'
      ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
      : ''
  }
  
  function validate (rut) {
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
  
  function format (rut) {
    rut = clean(rut)
  
    let result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
    for (let i = 4; i < rut.length; i += 3) {
      result = rut.slice(-3 - i, -i) + '.' + result
    }
  
    return result
  }
  
  function getCheckDigit (input) {
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

const cargarTurnos = async()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let turnos = await getTurnos();
    turnos.forEach(t=>{
        let option=document.createElement("option");
        option.innerText=t;
        if (t=="Dia"){
            option.value="1";
        }if(t=="Tarde"){
            option.value="2";
        }if(t=="Noche"){
            option.value="3";
        }
        filtroCbx.appendChild(option);
    });
};
const actualizar = async function(){
    let cod_trabajador = this.cod_trabajador;
    let trabajador = await obtenerPorCodTrabajador(cod_trabajador);
    trabajador.rut = document.querySelector("#rut-txt").value;
    trabajador.nom_persona = document.querySelector("#nombre-txt").value.trim();
    trabajador.turno = document.querySelector("#turno-select").value;
    trabajador.tipo_contrato = document.querySelector("#contrato-select").value;
    trabajador.nom_trabajo = document.querySelector("#trabajo-select").value;
    await actualizarTrabajador(trabajador);
    await Swal.fire("Trabajador actualizado, se recargará la página");
    window.location.href="vertrabajadores";
}
const iniciarEliminacion = async function(){
    let cod_trabajador = this.cod_trabajador;
    let resp = await Swal.fire({
        title:"Esta seguro?",
        text:"Esta acción es irreversible",
        icon:"error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarTrabajador(cod_trabajador)){
            let trabajadores = await getTrabajadores();
            cargarTabla(trabajadores);
            Swal.fire("Trabajador eliminado","Trabajador eliminado correctamente","info");
            }
        else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado a peticion del usuario");
    }
};
const iniciarActualizacion= async function(){
    let cod_trabajador=this.cod_trabajador;
    let trabajador = await obtenerPorCodTrabajador(cod_trabajador)
    let ingresoRut=document.querySelector("#rut-txt").value=trabajador.rut;
    let ingresoNombre=document.querySelector("#nombre-txt").value=trabajador.nom_persona;
    let ingresoTurno=document.querySelector("#turno-select").value=trabajador.turno;
    let ingresoTrabajo=document.querySelector("#trabajo-select").value=trabajador.nom_trabajo;
    let ingresoContrato = document.querySelector("#contrato-select").value=trabajador.tipo_contrato;
    let botonAct = document.querySelector("#actualizar-btn");
    botonAct.cod_trabajador = cod_trabajador;
    botonAct.addEventListener("click", actualizar);
}

const cargarTabla = (trabajadores)=>{
    let tbody=document.querySelector("#tbody-trabajador");
    tbody.innerHTML="";
    for(let i=0; i<trabajadores.length;i++){
        let tipoContrato = trabajadores[i].tipo_contrato;
        let nombreTrabajo = trabajadores[i].nom_trabajo;
        let nombreTurno = trabajadores[i].turno;

        let tr=document.createElement("tr");
        let tdRut=document.createElement("td");
        tdRut.innerText=format(trabajadores[i].rut);
        let tdNombre=document.createElement("td");
        tdNombre.innerText=trabajadores[i].nom_persona;

        let tdTipoContrato = document.createElement("td");
        tdTipoContrato.classList.add("text-center");
        //Se puede hacer esto con una funcion
        switch(tipoContrato){
            case "1":tipoContrato="Jornada completa";break;
            case "2":tipoContrato="Domingos y festivos";break;
            case "3":tipoContrato="Por honorarios";break;
            case "4":tipoContrato="Reemplazo";break;
        }
        tdTipoContrato.innerText=tipoContrato;

        let tdTrabajo=document.createElement("td");
        tdTrabajo.classList.add("text-center");
        //Se puede hacer esto con una funcion
        switch(nombreTrabajo){
            case "1":nombreTrabajo="Administrador";break;
            case "2":nombreTrabajo="Conserje";break;
            case "3":nombreTrabajo="Jardinero";break;
            case "4":nombreTrabajo="Aseador";break;
        }
        tdTrabajo.innerText=nombreTrabajo;
        
        let tdTurno=document.createElement("td");
        tdTurno.classList.add("text-center");
        //Se puede hacer esto con una funcion
        switch(nombreTurno){
            case "1":nombreTurno="Dia";break;
            case "2":nombreTurno="Tarde";break;
            case "3":nombreTurno="Noche";break;
        }
        tdTurno.innerText=nombreTurno;

        let tdAcciones = document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Eliminar";
        botonEliminar.classList.add("btn","btn-danger","mx-2");
        botonEliminar.cod_trabajador=trabajadores[i].cod_trabajador;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        let botonActualizar=document.createElement("button");
        botonActualizar.innerText="Actualizar";
        botonActualizar.classList.add("btn","btn-info");
        botonActualizar.cod_trabajador=trabajadores[i].cod_trabajador;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);
        tr.appendChild(tdRut);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipoContrato);
        tr.appendChild(tdTrabajo);
        tr.appendChild(tdTurno);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let trabajadores = await getTrabajadores(filtro);
    cargarTabla(trabajadores);
});

document.addEventListener("DOMContentLoaded", async()=>{
    await cargarTurnos();
    let trabajadores = await getTrabajadores();
    cargarTabla(trabajadores);
});