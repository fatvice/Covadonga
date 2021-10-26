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
<div class="row mt-5 mb-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-white">
                <span>Actualizar Usuario</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="rut-txt" class="form-label">Rut</label>
                    <input type="text" id="rut-txt" class="form-control" disabled>
                </div>
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control" disabled>
                </div>
                <div class="mb-3">
                    <label for="pass-txt" class="form-label">Contraseña</label>
                    <input type="text" id="pass-txt" class="form-control">
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
                            <input type="radio" name="moroso-rb" id="moroso-si-rb" class="form-check-input" value="si" >
                            <label for="moroso-si-rb" class="form-check-label">Sí</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" name="moroso-rb" id="moroso-no-rb" class="form-check-input" value="no" >
                            <label for="moroso-no-rb" class="form-check-label">No</label>
                        </div>
                    </div>
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
    <script src="{{asset('js/ver_usuarios.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosService.js')}}"></script>
@endsection