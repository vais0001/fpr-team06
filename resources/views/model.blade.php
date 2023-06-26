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
        <style>
            /*Change nav to absolute so model does not break*/
            nav {
                position: absolute;
                background-color: #e5e7eb;
                width: 100%;
            }
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

            .button-light {
                margin-bottom: 10px;
                border-radius: 10px;
                padding: 10px;
                background: rgba(299, 299, 299, 0.4);
                color: black;
                cursor: pointer;
            }

            .button-dark {
                margin-bottom: 10px;
                border-radius: 10px;
                padding: 10px;
                background: rgba(0, 0, 0, 0.4);
                color: white;
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

            /*Weather Widget*/
            .outside-temperature-container {
                position: absolute;
                right: 1%;
                top: 85%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
            }

            .widget-light {
                width: 200px;
                height: 225px;
                border-radius: 20px;
                background: rgba(299, 299, 299, 0.4);
            }

            .widget-dark {
                width: 200px;
                height: 225px;
                border-radius: 20px;
                background: rgba(0, 0, 0, 0.4);
            }

            .widget-light .left {
                position: absolute;
                right: 0;
                width: 200px;
                margin-top: 85px;
            }

            .widget-dark .left {
                position: absolute;
                right: 0;
                width: 200px;
                margin-top: 85px;
            }

            .widget-light .right {
                position: absolute;
                right: 0;
                width: 200px;
                color: black;
                margin: 20px 0;
            }

            .widget-dark .right {
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
                color: black;
                text-align: center;
                margin: -5px 0 0;
                font-size: 20px;
            }

            .widget-light .right .city {
                font-size: 1em;
                text-align: center;
                margin-bottom: 10px;
                text-shadow: 1px 1px 5px #707070;
            }

            .widget-dark .right .city {
                font-size: 1em;
                text-align: center;
                margin-bottom: 10px;
                text-shadow: 1px 1px 5px #707070;
            }

            .widget-light .right .degree {
                font-size: 2.5em;
                font-weight: bold;
                text-align: center;
                margin: 0;
                text-shadow: 1px 1px 5px #707070;
            }

            .widget-dark .right .degree {
                font-size: 2.5em;
                font-weight: bold;
                text-align: center;
                margin: 0;
                text-shadow: 1px 1px 5px #707070;
            }

            .modal-dialog {
                max-width: 1200px; /* or any other value that suits your needs */
                margin: 1.75rem auto; /* Adjusts vertical and horizontal centering */
            }

            .tooltip-light {
                border: black solid 1px;
                background-color: white;
                border-radius: 5px;
                position: absolute;
                pointer-events: none;
                padding: 10px;
            }

            .tooltip-dark {
                border: 1px;
                background-color: black;
                border-radius: 5px;
                color: white;
                display: none;
                position: absolute;
                pointer-events: none;
                padding: 10px;
            }


        </style>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js" integrity="sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom"></script>

        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <div class="tooltip-light" id="tooltip">
            Tooltip text
        </div>

        <div id="model" class="antialiased d-flex flex-column">
            <div class="button-container">
                <button class="button-light button" id="button-light1" value="0">@lang('messages.ground_floor')</button>
                <button class="button-light button" id="button-light2" value="1">@lang('messages.first_floor')</button>
                <button class="button-light button" id="button-light3" value="2">@lang('messages.second_floor')</button>
                <button class="button-light button" id="button-light4" value="3">@lang('messages.third_floor')</button>
            </div>
            <div class="fixed top-16 m-2 bg-orange-600 rounded" id="co2-danger"></div>
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

            <!-- Modal Structure -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content dark:bg-slate-800">
                        <div class="modal-header">
                            <button type="button" class="close dark:text-white" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title dark:text-white" id="myModalLabel">Room Data</h4>
                        </div>
                        <div class="modal-body">
                            <!-- Add your chart container here -->
                            <div class="chart-container">
                                <canvas class="" id="myChartTemp"></canvas>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="cursor-pointer" id="backData"> < </div>
                                <div class="flex justify-center items-center gap-1 flex-row">
                                    <div class="bg-sky-500 text-white rounded px-2 cursor-pointer" id="weekButton">Week</div>
                                    <div class="bg-sky-500 text-white rounded px-2 cursor-pointer" id="dayButton">Day</div>
                                    <div class="bg-sky-500 text-white rounded px-2 cursor-pointer" id="hourButton">Hour</div>
                                </div>
                                <div class="cursor-pointer" id="nextData"> > </div>
                            </div>
                            <div class="flex justify-center items-center flex-column w-full">
                                <div id="errorData" class="text-red-600"></div>
                                <div class="flex justify-center items-center gap-4 flex-row dark:text-white">
                                    <div>
                                        <div>Highest Temperature - <span id="highTemp"></span></div>
                                        <div>Lowest Temperature - <span id="lowTemp"></span></div>
                                    </div>
                                    <div>
                                        <div>Highest Co2 - <span id="highCo2"></span></div>
                                        <div>Lowest Co2 - <span id="lowCo2"></span></div>
                                    </div>
                                </div>
                                <h2 class="dark:text-white">Energy loss indication</h2>
                                <div class="flex justify-center items-center h-full flex-wrap gap-2" id="roomsContainer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </x-slot>
</x-app-layout>
