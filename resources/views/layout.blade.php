<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">

</head>
<style>
    body {
        height: 100vh;
    }

    .nav-item {
        font-size: 20px;
        margin: 20px;
    }

    .flex-column {
        display: inline-flex;
    }

    h6, span {
        text-align: center;
    }
</style>

<body class="antialiased d-flex flex-column">
<nav class="navbar navbar-expand-lg flex-wrap navbar-light bg-light">
    <img src="{{ asset('images/JRCZ.jpg') }}" alt="JRCZ-logo" class="">
    <ul class="navbar-nav d-flex flex-grow-1">
        <li class="nav-item active">
            <a class="nav-link" href="/">Overview</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Upload</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Export</a>
        </li>
        <li class="nav-item d-flex gap-1" style="margin-left: auto">
            <a class="nav-link" href="#">Language</a>
            <a class="nav-link" href="#">Theme</a>
        </li>
    </ul>
</nav>
<div class="d-flex">
    <div class="list-group list-group-flush border-bottom navbar-nav-scroll" style="width: 235px;">
        @foreach($rooms as $room)
            <a href="/{{ $room->id }}" class="list-group-item list-group-item-action py-1 flex-fill"
               aria-current="true"
               style="background-color: {{$room->energyStatus ? "rgba(255,141,141,0.58)" : "rgba(141,164,255,0.58)"}}">
                <div class="d-flex w-100 align-items-center justify-content-center">
                    <strong class="mb-1">{{ $room->name }}</strong>
                </div>
            </a>
        @endforeach
    </div>

    <div class="b-example-divider b-example-vr"></div>

    @yield('content')
</div>
<footer class="mt-auto d-flex flex-grow-1 justify-content-center align-items-center" style="background-color: #ffffff">
    <h6>
        Team Kelvin Copyright c*. :)
    </h6>
</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossorigin="anonymous"></script>
</body>
</html>
