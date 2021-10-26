@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Registrar Trabajador</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="rut-txt" class="form-label">Rut</label>
                    <input type="text" id="rut-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="turno-select" class="form-label">Turno</label>
                    <select class="form-select" id="turno-select">
                        <option value="1">Dia</option>
                        <option value="2">Tarde</option>
                        <option value="3">Noche</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="trabajo-select" class="form-label">Trabajo</label>
                    <select class="form-select" id="trabajo-select">
                        <option value="1">Administrador</option>
                        <option value="2">Conserje</option>
                        <option value="3">Jardinero</option>
                        <option value="4">Aseador</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="contrato-select" class="form-label">Contrato</label>
                    <select class="form-select" id="contrato-select">
                        <option value="1">Jornada completa</option>
                        <option value="2">Domingos y festivos</option>
                        <option value="3">Por honorarios</option>
                        <option value="4">Reemplazo</option>
                    </select>
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" class="btn btn-info">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection
@section("javascript")
    <script src="{{asset('js/registrar_trabajador.js')}}"></script>
    <script src="{{asset('js/servicios/trabajadoresService.js')}}"></script>
@endsection