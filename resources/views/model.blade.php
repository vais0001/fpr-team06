<!DOCTYPE html>
<html>

<?php
$apiKey = 'cc610a4c33d0a351eaaf995a8262866f';
$place = 'Middelburg, Netherlands';
$url = "https://api.openweathermap.org/data/2.5/weather?q=$place&units=metric&APPID=$apiKey";
$data = file_get_contents($url);
$json = json_decode($data);

$temperature = $json->main->temp;
$description = $json->weather[0]->description;
$iconCode = $json->weather[0]->icon;
$iconUrl = "http://openweathermap.org/img/w/$iconCode.png";
?>

<head lang="en">
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <title>My first three.js app</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;600&display=swap');
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
        }

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

        {{--Weather Widget--}}
        .outside-temperature-container {
            position: absolute;
            right: 1%;
            top: 85%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
        }

        .widget {
            width: 200px;
            height: 200px;
            border-radius: 20px;
            background: rgba(299, 299, 299, 0.4);
        }

        .widget .left {
            position: absolute;
            right: 0;
            width: 200px;
            margin-top: 85px;
        }

        .widget .right {
            position: absolute;
            right: 0;
            width: 200px;
            color: #fff;
            margin: 20px 0;
        }

        .icon {
            width: 50%;
            margin-bottom: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .weather-status {
            color: #fff;
            text-align: center;
            margin: -30px 0 0;
        }

        .widget .right .city {
            font-size: 1em;
            text-align: center;
            margin-bottom: 10px;
            text-shadow: 1px 1px 5px #707070;
        }

        .widget .right .degree {
            font-size: 2.5em;
            font-weight: bold;
            text-align: center;
            margin: 0;
            text-shadow: 1px 1px 5px #707070;
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
{{--Weather Widget--}}
<div class="outside-temperature-container">
    <div class="widget">
        <div class="left">
            <img src="{{ asset('images/cloudy-day-3.svg') }}" class="icon" alt="Weather Icon">
            <h5 class="weather-status"><?php echo $description; ?></h5>
        </div>
        <div class="right">
            <h5 class="city">Middelburg</h5>
            <h5 class="degree"><?php echo round($temperature); ?>&deg;C</h5>
        </div>
    </div>
</div>

</head>
</body>
</html>
