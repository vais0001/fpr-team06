<x-app-layout>
    <?php
    $apiKey = 'cc610a4c33d0a351eaaf995a8262866f';
    $place = 'Middelburg, Netherlands';
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$place&units=metric&APPID=$apiKey";
    $data = file_get_contents($url);
    $json = json_decode($data);

    $temperature = $json->main->temp;
    $description = $json->weather[0]->description;
    $imgPath='';
    switch ($description){
        case 'clear sky':
            $imgPath='images/day.svg';
            break;
        case 'few clouds':
            $imgPath='images/cloudy-day-1.svg';
            break;
        case 'scattered clouds':
            $imgPath='images/cloudy.svg';
            break;
        case 'broken clouds':
            $imgPath='images/cloudy.svg';
            break;
        case 'overcast clouds':
            $imgPath='images/cloudy.svg';
            break;
        case 'shower rain':
            $imgPath='images/rainy-3.svg';
            break;
        case 'rain':
            $imgPath='images/rainy-7.svg';
            break;
        case 'light rain':
            $imgPath='images/rainy-7.svg';
            break;
        case 'thunderstorm':
            $imgPath='images/thunder.svg';
            break;
        case 'snow':
            $imgPath='images/snowy-6.svg';
            break;
        case 'mist':
            $imgPath='images/cloudy.svg';
            break;
    }
    $iconCode = $json->weather[0]->icon;
    $iconUrl = "http://openweathermap.org/img/w/$iconCode.png";
    ?>

    <x-slot name="slot">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
       <script src="resources/css/app.css"></script>
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <div id="model" class="antialiased d-flex flex-column">
            <div class="button-container">
                <button class="button-light" id="button-light1" value="ground">Ground Floor</button>
                <button class="button-light" id="button-light2" value="1">Floor 1</button>
                <button class="button-light" id="button-light3" value="2">Floor 2</button>
                <button class="button-light" id="button-light4" value="3">Floor 3</button>
            </div>
            {{--Weather Widget--}}
            <div class="outside-temperature-container">
                <div class="widget-light">
                    <div class="left">
                        <img src="{{ asset($imgPath) }}" class="icon" alt="Weather Icon">
                        <h5 class="weather-status"><?php echo $description; ?></h5>
                    </div>
                    <div class="right">
                        <h5 class="city">Middelburg</h5>
                        <h5 class="degree"><?php echo round($temperature); ?>&deg;C</h5>
                    </div>
                </div>
            </div>
        </div>
    </x-slot>
</x-app-layout>
