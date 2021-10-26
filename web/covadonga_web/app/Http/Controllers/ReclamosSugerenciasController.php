<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ReclamoSugerencia;
use App\Models\Usuario;

class ReclamosSugerenciasController extends Controller
{
    //
    public function getReclamosSugerenciasByUsuario(Request $request){
        $input = $request->all();
        $cod_usuario=$input["cod_usuario"];
        $usuario = Usuario::findOrFail($cod_usuario);
        return $usuario->reclamosSugerencias()->get();
    }
    public function getReclamosSugerencias(){
        return ReclamoSugerencia::all();
    }
    public function crearReclamoSugerencia(Request $request){
        $input = $request->all();
        $texto = $input["texto"];
        $tipo_info = $input["tipo_info"];
        $cod_usuario = $input["cod_usuario"];
        $reclamoSugerencia = new ReclamoSugerencia();
        $reclamoSugerencia->texto = $texto;
        $reclamoSugerencia->tipo_info = $tipo_info;
        $reclamoSugerencia->cod_usuario = $cod_usuario;
        $reclamoSugerencia->Save();
        return $reclamoSugerencia;
    }
    public function eliminarReclamoSugerencia(Request $request){
        $input = $request->all();
        $cod_info = $input["cod_info"];
        $reclamoSugerencia = ReclamoSugerencia::findOrFail($cod_info);
        $reclamoSugerencia->delete();
        return "ok";
    }
    public function actualizarReclamoSugerencia(Request $request){
        $input = $request->all();
        $cod_info = $input["cod_info"];
        $reclamoSugerencia = ReclamoSugerencia::findOrFail($cod_info);
        $texto = $input["texto"];
        $tipo_info = $input["tipo_info"];
        $cod_usuario = $input["cod_usuario"];
        $reclamoSugerencia->texto = $texto;
        $reclamoSugerencia->tipo_info = $tipo_info;
        $reclamoSugerencia->cod_usuario = $cod_usuario;
    }
    public function filtrarReclamosSugerencias(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $reclamosSugerencias = ReclamoSugerencia::where("tipo_info","=", $filtro)->get();
        return $reclamosSugerencias;
    }
    public function obtenerPorCodReclamoSugerencia(Request $request){
        $input = $request->all();
        $cod_info = $input["cod_info"];
        $reclamoSugerencia = ReclamoSugerencia::findOrFail($cod_info);
        return $reclamoSugerencia;
    }
}