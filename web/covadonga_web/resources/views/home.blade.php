@extends('layouts.master')

@section('contenido')
    <div class="row mt-5 mb-5">
        <div class="col-4">
            <div class="card">
                <div class="card-header bg-warning text-white text-center">
                    Ingreso
                </div>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <input type="text" id="nombre-txt"class="form-control" placeholder="Nombre de usuario" aria-label="Username">
                        <span class="input-group-text">#</span>
                        <input type="text" id="codUsuario-txt"class="form-control" placeholder="Código de usuario" aria-label="Server">
                    </div>
                    <div class="mb-3">
                        <label for="password-txt" class="form-label">Contraseña</label>
                        <div class="input-group">
                            <input type="password" id="password-txt" class="form-control">
                            <button class="btn" type="button" id="password-btn">
                                <span id = "icon" class="fa fa-eye-slash"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="ingresar-btn" class="btn btn-info">Ingresar</button>
                </div>
            </div>
        </div>
    </div>


@endsection
@section('javascript')
    <script src="{{asset('js/home.js') }}"></script>
    <script sre="{{asset('js/servicios/homeServices.js')}}"></script>
@endsection
