const crearPago = async(pago)=>{
    let resp = await axios.post("api/pagos/post", pago, {
        headers:{
            "Content-Type":"application/json"
        }
    });
    return resp.data;
};
const eliminarPago = async(cod_pago)=>{
    try{
        let resp = await axios.post("api/pagos/eliminar", {cod_pago}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const actualizarPago = async(cod_pago)=>{
    try{
        let resp = await axios.post("api/pagos/actualizar", {cod_pago}, {
            headers:{
                "Content-Type":"application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
const getPagos = async()=>{
    let resp = await axios.get("api/pagos/get");
    return resp.data;
}
const obtenerPorCodPago = async (cod_pago)=>{
    let resp = await axios.get(`api/pagos/findByCodPago?cod_pago=${cod_pago}`);
    return resp.data;
}