const crearReclamoSugerencia = async(reclamoSugerencia)=>{
    let resp = await axios.post("api/reclamosSugerencias/post", reclamoSugerencia, {
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};
const eliminarReclamoSugerencia = async(cod_info)=>{
    try{
        let resp = await axios.post("api/reclamosSugerencias/eliminar", {cod_info}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const actualizarReclamoSugerencia = async(cod_info)=>{
    try{
        let resp = await axios.post("api/reclamosSugerencias/actualizar", {cod_info}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const getReclamosSugerencias = async(filtro="todos")=>{
    let resp;
    if (filtro=="todos"){
        resp=await axios.get("api/reclamosSugerencias/get");
    }else{
        resp= await axios.get(`api/reclamosSugerencias/filtrar?filtro=${filtro}`)
    }
    return resp.data;
}
const obtenerPorCodReclamoSugerencia = async (cod_info)=>{
    let resp = await axios.get(`api/reclamosSugerencias/findByCodReclamoSugerencia?cod_info=${cod_info}`);
    return resp.data;
}