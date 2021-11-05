//Ingreso de datos de usuario
//TODO: Mejorar esto para importarlo desde rutjs
// Hay que preguntarle al profe como se hace
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
  }
}

document.querySelector("#pass-btn").addEventListener("click",()=>{
  mostrarContrasena();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let pass = document.querySelector("#pass-txt").value.trim();
    let confirmPass = document.querySelector("#confirmpass-txt").value.trim();
    let estacionamiento = +document.querySelector("#estacionamiento-txt").value.trim();
    let bodega = +document.querySelector("#bodega-txt").value.trim();
    let moroso = document.querySelector("#moroso-no-rb").checked ? "0": "1";

    let errores=[];


    if(rut.length!=0){
        if(validate(rut)!=true){
            errores.push("Rut ingresado de manera incorrecta, recuerde que la validacion tambien detecta el digito verificador");
        }
    }
    if(nombre===""){
        errores.push("Debe ingresar un nombre");
    }
    console.log(confirmPass);
    if(nombre.length>70){
        errores.push("El nombre debe tener menos de 70 caracteres");
    }
    if(pass===""){
        errores.push("Debe ingresar una contraseña");
    }
    if(pass.length<4){
        errores.push("La contraseña debe tener al menos 4 caracteres");
    }
    if(!(pass===confirmPass)){
      errores.push("Las contraseñas deben coincidir");
    }
    if(estacionamiento>70 || estacionamiento<0){
        errores.push("Debe ingresar un estacionamiento valido menor a 71 y mayor a -1");
    }
    if(bodega>20 || bodega<0){
        errores.push("Debe ingresar una bodega valida menor a 21 y mayor a -1");
    }
    //TODO: verificacion de si un estacionamiento esta en uso o no

    if(errores.length==0){
        let usuario={};
        rut= clean(rut);
        estacionamiento = estacionamiento.toString();
        bodega=bodega.toString();
        usuario.rut=rut;
        usuario.nombre=nombre;
        usuario.password = pass;
        usuario.estacionamiento = estacionamiento;
        usuario.bodega = bodega;
        usuario.moroso=moroso;

        let resultado = await crearUsuario(usuario);
        Swal.fire("Usuario ingresado");
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon:"warning",
            html:errores.join("<br />")
        })
    }

});