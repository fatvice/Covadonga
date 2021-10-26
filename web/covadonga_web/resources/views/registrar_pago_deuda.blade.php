@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Ingresar pago o deuda</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="usuario-select" class="form-label">Seleccionar usuario</label>
                    <select class="form-select" id="usuario-select">
                    </select>
                </div>
                <div class="mb-3">
                    <label for="opcion-select" class="form-label">Tipo de información a ingresar</label>
                    <select class="form-select" id="opcion-select">
                        <option value="1">Pago</option>
                        <option value="2">Deuda</option>
                    </select>
                </div>
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
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection
<!--Esto define el contenido de la seccion javascript del master -->
@section("javascript")
    <script src="{{asset('js/registrar_pago_deuda.js')}}"></script>
    <script src="{{asset('js/servicios/pagosService.js')}}"></script>
    <script src="{{asset('js/servicios/deudasService.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
@endsection