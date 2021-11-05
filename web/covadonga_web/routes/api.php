<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeudasController;
use App\Http\Controllers\PagosController;
use App\Http\Controllers\ReclamosSugerenciasController;
use App\Http\Controllers\TrabajadoresController;
use App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//RUTAS DEUDAS
Route::get("deudas/get",[DeudasController::class,"getDeudas"]);
Route::get("deudas/getByUsuario",[DeudasController::class,"getDeudasByUsuario"]);
Route::get("deudas/findByCodDeuda",[DeudasController::class,"obtenerPsorCodDeuda"]);
Route::post("deudas/post",[DeudasController::class,"crearDeuda"]);
Route::post("deudas/eliminar",[DeudasController::class,"eliminarDeuda"]);
Route::post("deudas/actualizar",[DeudasController::class,"actualizarDeuda"]);

//RUTAS PAGOS
Route::get("pagos/get",[PagosController::class,"getPagos"]);
Route::get("pagos/getByUsuario",[PagosController::class,"getPagosByUsuario"]);
Route::get("pagos/findByCodPago",[PagosController::class,"obtenerPorCodPago"]);
Route::post("pagos/post",[PagosController::class,"crearPago"]);
Route::post("pagos/eliminar",[PagosController::class,"eliminarPago"]);
Route::post("pagos/actualizar",[PagoController::class,"actualizarPago"]);

//RUTAS RECLAMOS Y SUGERENCIAS
Route::get("reclamosSugerencias/get",[ReclamosSugerenciasController::class,"getReclamosSugerencias"]);
Route::get("reclamosSugerencias/getByUsuario",[ReclamosSugerenciasController::class,"getReclamosSugerenciasByUsuario"]);
Route::get("reclamosSugerencias/filtrar", [ReclamosSugerenciasController::class,"filtrarReclamosSugerencias"]);
Route::get("reclamosSugerencias/findByCodReclamoSugerencia",[ReclamosSugerencias::class,"obtenerPorCodReclamoSugerencia"]);
Route::post("reclamosSugerencias/post",[ReclamosSugerenciasController::class,"crearReclamoSugerencia"]);
Route::post("reclamosSugerencias/eliminar",[ReclamosSugerenciasController::class,"eliminarReclamoSugerencia"]);
Route::post("reclamosSugerencias/actualizar",[ReclamosSugerenciasController::class,"actualizarReclamoSugerencia"]);

//RUTAS TRABAJADORES
Route::get("trabajadores/get",[TrabajadoresController::class,"getTrabajadores"]);
Route::get("trabajadores/filtrarturno",[TrabajadoresController::class,"filtrarTrabajadoresTurno"]);
Route::get("trabajadores/getturnos",[TrabajadoresController::class,"getTurnos"]);
Route::get("trabajadores/findByCodTrabajador",[TrabajadoresController::class,"obtenerPorCodTrabajador"]);
/*
Route::get("trabajadores/filtrartrabajo",[TrabajadoresController::class,"filtrarTrabajadoresTrabajo"]);
Route::get("trabajadores/filtrarcontrato",[TrabajadoresController::class,"filtrarTrabajadoresContrato"]);
*/
Route::post("trabajadores/post",[TrabajadoresController::class,"crearTrabajador"]);
Route::post("trabajadores/eliminar",[TrabajadoresController::class,"eliminarTrabajador"]);
Route::post("trabajadores/actualizar",[TrabajadoresController::class,"actualizarTrabajador"]);

//RUTAS USUARIOS
Route::get("usuarios/get",[UsuariosController::class,"getUsuarios"]);
Route::get("usuarios/filtrar",[UsuariosController::class,"filtrarUsuarios"]);
Route::get("usuarios/findByCodUsuario",[UsuariosController::class,"obtenerPorCodUsuario"]);
Route::post("usuarios/post",[UsuariosController::class,"crearusuario"]);
Route::post("usuarios/eliminar",[UsuariosController::class,"eliminarUsuario"]);
Route::post("usuarios/actualizar",[UsuariosController::class,"actualizarUsuario"]);