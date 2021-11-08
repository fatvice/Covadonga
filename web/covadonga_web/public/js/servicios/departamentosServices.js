const getDepartamentos = async (filtro = "todos") => {
    let resp;
    if (filtro == "todos") {
        resp = await axios.get("api/departamentos/get");
    } else {
        resp = await axios.get(`api/departamentos/filtrar?filtro=${filtro}`);
    }
    return resp.data;
}
const actualizarEstadoDepartamento = async (departamento) => {
    try {
        let resp = await axios.post("api/departamentos/actualizar", departamento, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    } catch (e) {
        return false;
    }
};