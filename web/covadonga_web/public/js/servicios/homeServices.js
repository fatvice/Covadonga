const obtenerPorCodUsuario = async (cod_usuario)=>{
    let resp = await axios.get(`api/usuarios/findByCodUsuario?cod_usuario=${cod_usuario}`);
    return resp.data;
}
const getUsuarios=async(filtro="todos")=>{
    let resp;
    if (filtro=="todos"){
        resp=await axios.get("api/usuarios/get");
    }else{
        resp= await axios.get(`api/usuarios/filtrar?filtro=${filtro}`)
    }
    return resp.data;
}