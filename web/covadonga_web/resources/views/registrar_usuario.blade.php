@extends('layouts.master')

@section('contenido')
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Registrar Usuario</span>
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
                    <label for="pass-txt" class="form-label">Contraseña</label>
                    <div class="input-group">
                        <input type="password" id="pass-txt" class="form-control">
                        <button class="btn btn-outline-secondary" type="button" id="pass-btn">Mostrar Contraseña</button>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="confirmpass-txt" class="form-label">Confirme contraseña</label>
                    <input type="password" id="confirmpass-txt" placeholder="Ingrese nuevamente su contraseña" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="estacionamiento-txt" class="form-label">Estacionamiento</label>
                    <input type="number" id="estacionamiento-txt" class="form-control" value=0>
                </div>
                <div class="mb-3">
                    <label for="bodega-txt" class="form-label">Bodega</label>
                    <input type="number" id="bodega-txt" class="form-control" value=0>
                </div>
                <div>
                    <fieldset disabled="disabled">
                        <div class="mb-3">
                            <label for="moroso-rb" class="form-label">Moroso?</label>
                            <div class="form-check">
                                <input type="radio" name="moroso-rb" id="moroso-si-rb" class="form-check-input" value="si">
                                <label for="moroso-si-rb" class="form-check-label">Sí</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="moroso-rb" checked id="moroso-no-rb" class="form-check-input" value="no">
                                <label for="moroso-no-rb" class="form-check-label">No</label>
                            </div>
                        </div>
                    </fieldset>
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
    <script src="{{asset('js/registrar_usuario.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
@endsection