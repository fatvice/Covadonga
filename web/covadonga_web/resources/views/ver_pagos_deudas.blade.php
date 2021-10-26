@extends('layouts.master')

@section('contenido')
<div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <select class="form-select" id="filtro-cbx">
                    <option value="deudas">Deudas</option>
                    <option value="pagos">Pagos</option>
                </select>
            </div>
        </div>
    </div>
</div>

<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>Código usuario</td>
                    <td>Nombre</td>
                    <td>Monto</td>
                    <td>Fecha</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-pago-deuda">

            </tbody>
        </table>
    </div>
</div>
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Actualizar pago/deuda</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="monto-txt" class="form-label">Monto</label>
                    <input type="number" id="monto-txt" class="form-control" min="0">
                </div>
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="actualizar-btn" class="btn btn-info">Actualizar</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/pagosService.js')}}"></script>
    <script src="{{asset('js/servicios/deudasService.js')}}"></script>
    <script src="{{asset('js/ver_pagos_deudas.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
@endsection