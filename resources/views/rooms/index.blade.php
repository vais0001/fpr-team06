@extends('layout')

@section('content')
    <div class="d-flex flex-column flex-grow-1" style="background-color: rgba(224,228,236,0.75);">
        <div class="d-flex justify-content-center">
            <h1>Building</h1>
        </div>

        <section class="flex-grow-1 d-flex justify-content-center align-items-center" style="background-color: #e0e4ec; padding: 0 200px">
            <div class="container py-5 d-flex justify-content-center align-items-center">

                <div class="row d-flex justify-content-center align-items-center    ">
                    <div>

                        <div class="card shadow" style="color: #4B515D; border-radius: 35px; width: 300px">
                            <div class="card-body p-4">

                                <div class="d-flex">
                                    <h6 class="flex-grow-1">Temperature</h6>
                                </div>

                                <div class="d-flex flex-column text-center mt-2 mb-4">
                                    <h6 class="display-1 mb-1 font-weight-bold" style="color: #1C2331;"> 21°C </h6>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Highest today: 22°C</span>
                                        </div>
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Lowest today: 19°C </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container py-5 d-flex justify-content-center align-items-center">

                <div class="row d-flex justify-content-center align-items-center    ">
                    <div>

                        <div class="card shadow" style="color: #4B515D; border-radius: 35px; width: 300px">
                            <div class="card-body p-4">

                                <div class="d-flex">
                                    <h6 class="flex-grow-1">Energy usage</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="flex-grow-1">30/03/2023</h6>
                                </div>

                                <div class="d-flex flex-column text-center mt-2 mb-4">
                                    <h6 class="display-1 mb-1 font-weight-bold" style="color: #1C2331; font-size: 4rem"> 10 kWh </h6>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Highest today: 25 kWh</span>
                                        </div>
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Lowest today: 5 kWh </span>
                                        </div>
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Total used today: 50 kW </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-5 d-flex justify-content-center align-items-center">

                <div class="row d-flex justify-content-center align-items-center    ">
                    <div>
                        <div class="card shadow" style="color: #4B515D; border-radius: 35px; width: 300px">
                            <div class="card-body p-4">

                                <div class="d-flex">
                                    <h6 class="flex-grow-1">CO2</h6>
                                </div>

                                <div class="d-flex flex-column text-center mt-2 mb-4">
                                    <h6 class="display-1 mb-1 font-weight-bold" style="color: #1C2331;"> 412 </h6>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Highest today: 430</span>
                                        </div>
                                        <div><i style="color: #868B94;"></i> <span class="ms-5"> Lowest today: 400 </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>

@endsection
