@extends('layouts.master')

@section('contenido')
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-warning text-white">
                    <span>Filtrar Por Deuda</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-8 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr>
                        <td>Rut</td>
                        <td>Nombre</td>
                        <td>Estacionamiento</td>
                        <td>Bodega</td>
                        <td>Moroso</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-usuario">
                </tbody>
            </table>
        </div>
    </div>

    <div class="d-none">
        <div class="row mt-5 mb-5 molde-actualizar">
            <div class="mb-3">
                <label for="rut-txt" class="form-label">Rut</label>
                <input type="text" id="rut-txt" class="form-control" disabled="true">
            </div>
            <div class="mb-3">
                <label for="nombre-txt" class="form-label">Nombre</label>
                <input type="text" id="nombre-txt" class="form-control">
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
            </div>
            <button class="btn btn-info" id="actualizar-btn">Actualizar</button>
        </div>
    </div>


    <div class="d-none">
        <div class="row mt-5 mb-5 molde-password">
            <div class="mb-3">
                <label for="rutpass-txt" class="form-label">Rut</label>
                <input type="text" id="rutpass-txt" class="form-control" disabled="true">
            </div>
            <div class="mb-3">
                <label for="nombrepass-txt" class="form-label">Nombre</label>
                <input type="text" id="nombrepass-txt" class="form-control" disabled="true">
            </div>
            <div class="mb-3">
                <label for="olderpass-txt" class="form-label">Contraseña anterior</label>
                <input type="password" id="olderpass-txt" class="form-control" id="olderpass-txt">
            </div>
            <div class="mb-3">
                <label for="pass-txt" class="form-label">Contraseña nueva</label>
                <div class="input-group">
                    <input type="password" id="pass-txt" class="form-control">
                    <button class="btn btn-outline-secondary" type="button" id="pass-btn">Mostrar contraseña</button>
                </div>
            </div>
            <div class="mb-3">
                <label for="confirmpass-txt" class="form-label">Confirme contraseña</label>
                <input type="password" id="confirmpass-txt" placeholder="Ingrese nuevamente su contraseña"
                    class="form-control">
            </div>
            <button class="btn btn-info" id="actualizarpass-btn">Actualizar</button>
        </div>
    </div>


</div>

@endsection

@section('javascript')
    <script src="{{ asset('js/ver_usuarios.js') }}"></script>
    <script src="{{ asset('js/servicios/usuariosService.js') }}"></script>
@endsection
