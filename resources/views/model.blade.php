<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <title>My first three.js app</title>
    <style>
        body { margin: 0; padding: 0; overflow: hidden}

        .button-container {
            position: fixed;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
        }

        .button {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        #jrczimg {
            height: 120px;
            width: 200px;
        }
        .logo {
            height: 50px;
            width: 50px;
        }
    </style>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
<body class="antialiased d-flex flex-column">
<nav class="navbar navbar-expand-lg flex-wrap navbar-light bg-light">
    <img id='jrczimg' src="{{ asset('images/jrcz.png') }}" alt="JRCZ-logo" class="">
    <ul class="navbar-nav d-flex flex-grow-1 justify-content-left">
        <li class="nav-item active">
            Welcome, [Person]!
        </li>
    </ul>
    <ul class="navbar-nav d-flex flex-grow-1 justify-content-left">
        <li class="nav-item active ">
            Room Number
        </li>
    </ul>
    <ul class="navbar-nav d-flex flex-grow-3 justify-content-right">
        <li class="nav-item active ">
            <a class="nav-link text-primary" href="#"> Upload </a>
        </li>
    </ul>
    <ul class="navbar-nav d-flex flex-grow-3 justify-content-right">
        <li class="nav-item d-flex gap-1" style="margin-left: auto">
            <a class="nav-link" href="#"><img  src="{{ asset('images/internet.png') }}" alt="internet-logo" class="logo"></a>
            <a class="nav-link" href="#"><img  src="{{ asset('images/bell.png') }}" alt="bell-logo" class="logo"></a>
            <a class="nav-link" href="#"><img  src="{{ asset('images/user.png') }}" alt="user-logo" class="logo"></a>
        </li>
    </ul>
</nav>

    <div class="button-container">
        <button class="button" value="ground">Ground Floor</button>
        <button class="button" value="1">Floor 1</button>
        <button class="button" value="2">Floor 2</button>
        <button class="button" value="3">Floor 3</button>
    </div>
</head>
</body>
</html>
