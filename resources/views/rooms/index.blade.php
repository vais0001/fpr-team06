<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-start items-center flex-row gap-4">
            <h2 class="text-xl text-gray-800 dark:text-gray-200 leading-tight">
                @lang('messages.import')
            </h2>
            <div class="flex justify-end items-center flex-grow flex-row">
                <form class="text-gray-400" action="{{route('import-bookings')}}" id="importBookingForm" method="POST" enctype="multipart/form-data" name="importBookingForm">
                    @csrf
                    <input type="file" name="booking" required class="rounded-md bg-gray-700 w-52">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 h-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Import reservation DATA</button>
                    @if($errors->any())
                        <p class="text-red-600">{{session('errors')->first('errorBooking')}}</p>
                    @endif
                </form>
            </div>
        </div>
    </x-slot>
    <x-slot name="slot">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <div class="flex justify-center items-center m-auto flex-col text-gray-400 border-200">
            <form class="flex justify-center items-center flex-row gap-4" action="{{route('import')}}" id="importForm" method="POST" enctype="multipart/form-data" name="importForm">
                @csrf
                <input type="file" name="room_times" id="room_times" required class="rounded-md bg-gray-700 w-full mt-5">
                <input type="number" name="set_room" class="hidden" id="set_room">
            </form>
            <div id="errorContainer">
                @if ($errors->any())
                    <p class="text-red-600">{{session('errors')->first('errorTime')}}</p>
                @endif
                @if (\Session::has('success'))
                    <p class="text-emerald-600">{!! \Session::get('success') !!}</p>
                @endif
            </div>
            <form action="{{route('destroy')}}" id="destroyForm" method="POST" class="hidden" name="destroyForm">
                @csrf
                @method('delete')
                <input type="number" name="set_room_destroy" class="hidden" id="set_room_destroy">
            </form>
            <form action="{{route('rooms.edit', 1)}} " id="editForm" method="GET" class="hidden" name="editForm">
                @csrf
            </form>
        </div>
        <div id="mainContent" class="h-full w-full flex flex-col justify-center items-center mt-5 gap-3">
            @for ($i = 0; $i < 4; $i++)
            <div id="infoContainer" class="h-1/4 w-3/4 flex flex-col justify-center items-center gap-1 mb-5">
                <div id="floorContainer_0" class="flex justify-center items-center">
                    <h1 id="floorName" class="text-2xl text-gray-400 dark:text-white semi-bold">@lang('floor') {{$i}}</h1>
                </div>
                <div id="roomContainer" class="flex flex-wrap flex-row gap-4">
                    @foreach($rooms as $room)
                        @if($room->floor === $i)
                        <div id="{{$room->id}}"
                             class="bg-white dark:bg-gray-800 rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 roomContainer">
                            <h1 id="roomName" class="text-2xl text-gray-500 font-bold dark:hover:text-white text-center">
                                {{$room->name}}
                            </h1>
                        </div>
                        @endif
                    @endforeach
                        <div id="addRoom_{{$i}}"
                             class="bg-gray-50 dark:bg-gray-800 rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 addContainer">
                            <h1 id="{{$i}}" class="text-2xl text-gray-500 font-bold dark:hover:text-white text-center pl-2 pr-2">+</h1>
                        </div>
                </div>
            </div>
            @endfor
            <div id="tableContainer">
                <div class="flex justify-center items-center text-black">
                    <h2 id="roomNameTable"></h2>
                </div>

                <table class="table-auto w-full text-white text-center">
                    <thead>
                        <tr class="px-4 py-2 dark:text-white text-black text-center">
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2">@lang('messages.time') </th>
                            <th class="px-4 py-2">@lang('messages.co2')</th>
                            <th class="px-4 py-2">@lang('messages.temperature') </th>
                            <th class="px-4 py-2">@lang('messages.outside_temperature')</th>
                            <th class="px-4 py-2">@lang('messages.booked')</th>
                        </tr>
                    </thead>
                    <tbody class="text-black dark:text-white" id="tableBody">
                    </tbody>
                </table>
            </div>
        </div>
    </x-slot>

</x-app-layout>
