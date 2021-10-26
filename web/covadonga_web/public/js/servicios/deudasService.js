const crearDeuda = async(deuda)=>{
    let resp = await axios.post("api/deudas/post", deuda, {
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};
const eliminarDeuda = async(cod_deuda)=>{
    try{
        let resp = await axios.post("api/deudas/eliminar", {cod_deuda}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const actualizarDeuda = async(cod_deuda)=>{
    try{
        let resp = await axios.post("api/deudas/actualizar", {cod_deuda}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const getDeudas = async()=>{
    let resp = await axios.get("api/deudas/get");
    return resp.data;
}
const obtenerPorCodDeuda = async (cod_deuda)=>{
    let resp = await axios.get(`api/deudas/findByCodDeuda?cod_deuda=${cod_deuda}`);
    return resp.data;
}