<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Trabajador;

class TrabajadoresController extends Controller
{
    public function getTrabajadores(){
        $trabajadores = Trabajador::all();
        return $trabajadores;
    }

    public function getTurnos(){
        $turnos=["Dia","Tarde","Noche"];
        return $turnos;
    }

    public function crearTrabajador(Request $request){
        $input=$request->all();
        $trabajador=new Trabajador();
        $trabajador->nom_persona=$input["nom_persona"];
        $trabajador->rut=$input["rut"];
        $trabajador->turno=$input["turno"];
        $trabajador->nom_trabajo=$input["nom_trabajo"];
        $trabajador->tipo_contrato=$input["tipo_contrato"];
        $trabajador->save();
        return $trabajador;
    }

    public function eliminarTrabajador(Request $request){
        $input = $request->all();
        $cod_trabajador =$input["cod_trabajador"];
        $trabajador=Trabajador::findOrFail($cod_trabajador);
        $trabajador->delete();
        return"ok";
    }

    public function actualizarTrabajador(Request $request){
        $input=$request->all();
        $cod_trabajador=$input["cod_trabajador"];
        $trabajador=Trabajador::findOrFail($cod_trabajador);        
        $trabajador->nombre=$input["nombre"];
        $trabajador->rut=$input["rut"];
        $trabajador->turno=$input["turno"];
        $trabajador->nom_trabajo=$input["nom_trabajo"];
        $trabajador->tipo_contrato=$input["tipo_contrato"];
        $trabajador->save();
        return "ok";
    }

    public function filtrarTrabajadoresTurno(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $trabajadores=Trabajador::where("turno", "=",$filtro)->get();
        return $trabajadores;
    }
    public function obtenerPorCodTrabajador(Request $request){
        $input = $request->all();
        $cod_trabajador = $input["cod_trabajador"];
        $trabajador = Trabajador::findOrFail($cod_trabajador); 
        return $trabajador;
    }
/*
    public function filtrarTrabajadoresTrabajo(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $trabajadores=Trabajador::where("nom_trabajo", "=",$filtro)->get();
        return $trabajadores;
    }
    public function filtrarTrabajadoresContrato(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $trabajadores=Trabajador::where("tipo_contrato", "=",$filtro)->get();
        return $trabajadores;
    }
*/
}