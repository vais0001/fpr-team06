@extends('createlayout')

@section('content')

        <!-- Add the custom styles for your form -->
        <style>
            input[type=text], select {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            input[type=submit] {
                width: 100%;
                background-color: #0d6efd;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type=submit]:hover {
                background-color: #45a049;
            }

            div.card-content {
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 20px;
            }
            .col-75 {
                float: left;
                width: 75%;
                margin-top: 6px;
            }
            .blockCancel {
                display: block;
                width: 100%;
                border: none;
                background-color: #dc3545;
                padding: 14px 28px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                margin: 8px 0;
                border-radius: 4px;
            }
            .blockReset {
                display: block;
                width: 100%;
                border: none;
                background-color: lightgrey;
                padding: 14px 28px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                margin: 8px 0;
                border-radius: 4px;
            }
        </style>

        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-12">
                        <form method="post" action="/rooms">
                            @csrf
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Add a Room
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">

                                        @if ($errors->any())
                                            <div class="notification is-danger">
                                                <button class="delete"></button>
                                                <ul>
                                                    @foreach ($errors->all() as $error)
                                                        <li>{{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        @endif

                                        <div class="field">
                                            <label class="label">Name</label>
                                            <div class="control">
                                                <input id="name" name="name" class="input @error('name') is-danger @enderror" type="text" placeholder="Your Name here...">
                                            </div>
                                        </div>
                                            <div class="field">
                                            <div class="col-75">
                                                <label class="label">Floor</label>
                                                <select id="floor" name="floor">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="field">
                                            <div class="control">
                                                <input id="temperature" name="temperature" class="input @error('temperature') is-danger @enderror" type="text" placeholder="Your Temperature here...">
                                            </div>
                                        </div>
                                            <div class="field">
                                                <label class="label">Co2</label>
                                                <div class="control">
                                                    <input id="co2" name="co2" class="input @error('co2') is-danger @enderror" type="text" placeholder="Your Co2 here...">
                                                </div>
                                            </div>
                                            <div class="col-75">
                                                <label class="label">EnergyStatus</label>
                                                <select id="energyStatus" name="energyStatus">
                                                    <option value="1">True</option>
                                                    <option value="0">False</option>

                                                </select>
                                            </div>
                                        <div class="field is-grouped">
                                            <div class="control">
                                                <input type="submit" value="Save">
                                            </div>
                                            <div class="field is-grouped">
                                                <div class="center">
                                                    <a type="reset" class="blockReset">Reset</a>
                                                </div>
                                                </div>
                                            <div class="field is-grouped">
                                            <div class="control">
                                                <div class="center">
                                                    <a type="button" href="/rooms" class="blockCancel">Cancel</a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    @endsection

