const crearUsuario=async(usuario)=>{
    let resp=await axios.post("api/usuarios/post",usuario,{
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};

const eliminarUsuario=async(cod_usuario)=>{
    try{
        let resp = await axios.post("api/usuarios/eliminar",{cod_usuario},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
};

const actualizarUsuario=async(cod_usuario)=>{
    try{
        let resp = await axios.post("api/usuarios/actualizar",{cod_usuario},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
};

const getUsuarios=async(filtro="todos")=>{
    let resp;
    if (filtro=="todos"){
        resp=await axios.get("api/usuarios/get");
    }else{
        resp= await axios.get(`api/usuarios/filtrar?filtro=${filtro}`)
    }
    return resp.data;
}
const obtenerPorCodUsuario = async (cod_usuario)=>{
    let resp = await axios.get(`api/usuarios/findByCodUsuario?cod_usuario=${cod_usuario}`);
    return resp.data;
}