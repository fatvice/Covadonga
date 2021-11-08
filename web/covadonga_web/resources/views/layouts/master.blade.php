<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="{{asset('img/favicon-32x32.png')}}" type="image/png">
    @yield('extra-head')
    <title>Administración Covadonga</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="{{asset('img/logo.png')}}" class="img-fluid logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="{{route('home')}}">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="{{route('departamentos')}}">Departamentos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Registro
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><a class="dropdown-item" href="{{route('registrar_pago_deuda')}}">Pagos y Deudas</a></li>
                              <li><a class="dropdown-item" href="{{route('registrar_reclamo_sugerencia')}}">Reclamos y Sugerencias</a></li>
                              <li><a class="dropdown-item" href="{{route('registrar_trabajador')}}">Trabajador</a></li>
                              <li><a class="dropdown-item" href="{{route('registrar_usuario')}}">Usuario</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Ver
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><a class="dropdown-item" href="{{route('ver_pagos_deudas')}}">Pagos y Deudas</a></li>
                              <li><a class="dropdown-item" href="{{route('ver_reclamos_sugerencias')}}">Reclamos y Sugerencias</a></li>
                              <li><a class="dropdown-item" href="{{route('ver_trabajadores')}}">Trabajadores</a></li>
                              <li><a class="dropdown-item" href="{{route('ver_usuarios')}}">Usuarios</a></li>
                            </ul>
                          <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="{{route('eventos')}}">Calendario eventos</a>
                          </li>
                      </ul>
                      <form class="d-flex mx-5">
                        <button id = "btn-logout" class="btn btn-dark" type="button">Logout</button>
                      </form>
                      <span class="navbar-text">
                        <img src="{{asset('img/logo_USM.png')}}" class="img-fluid logo-usm">
                      </span>
                </div>
            </div>
        </nav>
    </header>

    <main class="container-fluid">
        @yield("contenido")
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{asset('js/axios_config.js')}}"></script>
    <script src="{{asset('js/utilities/master.js')}}"></script>
    @yield("javascript")

</body>

</html>