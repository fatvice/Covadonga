@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Ingresar reclamo o sugerencia</span>
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
                        <option value="1">Reclamo</option>
                        <option value="2">Sugerencia</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="texto-txt" class="form-label">Texto</label>
                    <textarea id="texto-txt" class="form-control"></textarea>
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
    <script src="{{asset('js/registrar_reclamo_sugerencia.js')}}"></script>
    <script src="{{asset('js/servicios/reclamosSugerenciasService.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
@endsection