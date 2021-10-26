<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pago;
use App\Models\Usuario;

class PagosController extends Controller
{
    //
    public function getPagosByUsuario(Request $request){
        $input = $request->all();
        $cod_usuario=$input["cod_usuario"];
        $usuario = Usuario::findOrFail($cod_usuario);
        return $usuario->pagos()->get();
    }
    public function getPagos(){
        return Pago::all();
    }
    public function crearPago(Request $request){
        $input = $request->all();
        $monto = $input["monto"];
        $fecha_pago = $input["fecha_pago"];
        $cod_usuario = $input["cod_usuario"];
        $pago = new Pago();
        $pago->monto = $monto;
        $pago->fecha_pago = $fecha_pago;
        $pago->cod_usuario = $cod_usuario;
        $pago->Save();
        return $pago;
    }
    public function eliminarPago(Request $request){
        $input = $request->all();
        $cod_pago = $input["cod_pago"];
        $pago = Pago::findOrFail($cod_pago);
        $pago->delete();
        return "ok";
    }
    public function actualizarPago(Request $request){
        $input = $request->all();
        $cod_pago = $input["cod_pago"];
        $pago = Pago::findOrFail($cod_pago);
        $monto = $input["monto"];
        $fecha_pago = $input["fecha_pago"];
        $cod_usuario = $input["cod_usuario"];
        $pago->monto = $monto;
        $pago->fecha_pago = $fecha_pago;
        $pago->cod_usuario = $cod_usuario;
        $pago->save();
        return "ok";
    }
    public function obtenerPorCodPago(Request $request){
        $input = $request->all();
        $cod_pago = $input["cod_pago"];
        $pago = Pago::findOrFail($cod_pago);
        return $pago;
    }
}