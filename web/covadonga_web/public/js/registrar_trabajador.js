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
function mostrarContrasena(){
var tipo = document.getElementById("pass-txt");
if (tipo.type=='password'){
  tipo.type="text";
}else{
  tipo.type="password";
}}
document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let turno = document.querySelector("#turno-select").value;
    let trabajo = document.querySelector("#trabajo-select").value;
    let contrato = document.querySelector("#contrato-select").value;
    let errores=[];

    if(rut.length!=0){
        if(validate(rut)!=true){
            errores.push("Rut ingresado de manera incorrecta, recuerde que la validacion tambien detecta el digito verificador");
        }
    }
    if(nombre===""){
        errores.push("Debe ingresar un nombre");
    }
    if(nombre.length>70){
        errores.push("El nombre debe tener menos de 70 caracteres");
    }

    if (errores.length==0){
        rut= clean(rut);
        let trabajador={};
        trabajador.rut=rut;
        trabajador.nom_persona=nombre;
        trabajador.turno=turno;
        trabajador.nom_trabajo=trabajo;
        trabajador.tipo_contrato=contrato;
        let resultado = await crearTrabajador(trabajador);
        Swal.fire("Trabajador registrado");
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        })
    }
});