<?php
use Illuminate\Support\Facades\Route;

Route::view("/","home")->name('home');
Route::view("/departamentos","departamentos")->name('departamentos');
Route::view("/admin","admin")->name("admin");
Route::view("/registrarpagosydeudas","registrar_pago_deuda")->name("registrar_pago_deuda");
Route::view("/registrarreclamosysugerencias","registrar_reclamo_sugerencia")->name("registrar_reclamo_sugerencia");
Route::view("/registrartrabajador","registrar_trabajador")->name("registrar_trabajador");
Route::view("/registrarusuario","registrar_usuario")->name("registrar_usuario");
Route::view("/verpagosydeudas","ver_pagos_deudas")->name("ver_pagos_deudas");
Route::view("/verreclamosysugerencias","ver_reclamos_sugerencias")->name("ver_reclamos_sugerencias");
Route::view("/vertrabajadores","ver_trabajadores")->name("ver_trabajadores");
Route::view("/verausuarios","ver_usuarios")->name("ver_usuarios");
Route::view("eventos","eventos")->name("eventos");