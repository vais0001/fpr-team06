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
            width: 400px;
            height: 200px;
            border-radius: 20px;
            background: rgba(299, 299, 299, 0.4);
        }

        .widget .left {
            position: absolute;
            left: 0;
            width: 200px;
        }

        .widget .right {
            position: absolute;
            right: 0;
            width: 200px;
            color: #fff;
            margin: 50px 0;
        }

        .icon {
            width: 75%;
            margin-bottom: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .weather-status {
            color: #fff;
            text-align: center;
            margin-top: -30px;
        }

        .widget .right .city {
            font-size: 1em;
            text-align: center;
            margin-bottom: 10px;
            text-shadow: 1px 1px 5px #707070;
        }

        .widget .right .degree {
            font-size: 2em;
            font-weight: bold;
            text-align: center;
            margin: 0;
            text-shadow: 1px 1px 5px #707070;
        }

    </style>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

<div class="button-container">
        <div class="button" value="1">Floor 1</div>
        <div class="button" value="2">Floor 2</div>
        <div class="button" value="3">Floor 3</div>
    </div>
{{--Weather Widget--}}
<div class="outside-temperature-container">
    <div class="widget">
        <div class="left">
            <img src="{{ asset('images/cloudy.svg') }}" class="icon" alt="Weather Icon">
            <h5 class="weather-status"><?php echo $description; ?></h5>
        </div>
        <div class="right">
            <h5 class="city">Middelburg</h5>
            <h5 class="degree"><?php echo $temperature; ?>&deg;C</h5>
        </div>
    </div>
</div>

</head>
<body>
</body>
</html>
