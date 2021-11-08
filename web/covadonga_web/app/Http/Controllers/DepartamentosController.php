<?php

namespace App\Http\Controllers;

use App\Models\Departamento;
use Illuminate\Http\Request;

class DepartamentosController extends Controller
{
    public function getDepartamentos(){
        $departamentos = Departamento::all();
        return $departamentos;
    }
    public function actualizarEstadoDepartamento(Request $request){
        $input=$request->all();
        $cod_depto=$input['cod_depto'];
        $depto=Departamento::findOrFail($cod_depto);
        $depto->estado=$input['estado'];
        $depto->save();
        return "ok";
    }
    public function filtrarDepartamentos(Request $request){
        $input=$request->all();
        $filtro = $input["filtro"];
        $departamentos=Departamento::where("estado","=",$filtro)->get();
        return $departamentos;
    }
}
