@extends('layouts.master')

@section('contenido')
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-warning text-white">
                    <span>Filtrar Por Estado</span>
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
                        <td>Dueño</td>
                        <td>Numero Departamento</td>
                        <td>Numero Torre</td>
                        <td>Estado</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-departamento">
                </tbody>
            </table>
        </div>
    </div>
@endsection


@section('javascript')
    <script src="{{asset('js/departamentos.js')}}"></script>
    <script src="{{asset('js/servicios/departamentosServices.js')}}"></script>
@endsection
