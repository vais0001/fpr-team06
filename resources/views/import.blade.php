<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Import') }}
        </h2>
    </x-slot>
    <x-slot name="slot">
        <div class="flex justify-center items-center m-auto flex-col text-gray-400 border-200">
            <form action="{{route('import')}}" id="importForm" method="POST" enctype="multipart/form-data" name="importForm">
                @csrf
                <input type="file" name="room_times" required class="rounded-md bg-gray-700 w-full mt-5">
                <input type="number" name="set_room" class="hidden" id="set_room">
            </form>
            <form action="{{route('destroy')}}" id="destroyForm" method="POST" class="hidden" name="destroyForm">
                @csrf
                @method('delete')
                <input type="number" name="set_room_destroy" class="hidden" id="set_room_destroy">
            </form>
        </div>
        <div id="world-map" data-maps='{{ json_encode($rooms) }}'></div>
        <div id="mainContent" class="h-full w-full flex flex-col justify-center items-center mt-5 gap-3">
            @for ($i = 0; $i < 4; $i++)
            <div id="infoContainer" class="h-1/4 w-3/4 flex flex-col justify-center items-center gap-1 mb-5">
                <div id="floorContainer_0" class="flex justify-center items-center">
                    <h1 id="floorName" class="text-2xl text-white semi-bold">Floor {{$i}}</h1>
                </div>
                <div id="roomContainer" class="flex flex-wrap flex-row gap-4">
                    @foreach($rooms as $room)
                        @if($room->floor === $i)
                        <div id="{{$room->id}}"
                             class="dark:bg-gray-800 rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 roomContainer">
                            <h1 id="roomName" class="text-2xl text-gray-500 font-bold dark:hover:text-white text-center">
                                {{$room->name}}
                            </h1>
                        </div>
                        @endif
                    @endforeach
                </div>
            </div>
            @endfor
            <div id="tableContainer">
                <table class="table-auto w-full text-white text-center">
                    <thead>
                        <tr class="px-4 py-2 text-white text-center">
                            <th class="px-4 py-2">Time</th>
                            <th class="px-4 py-2">Co2</th>
                            <th class="px-4 py-2">Temperature</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                    </tbody>
                </table>
            </div>
        </div>
    </x-slot>
</x-app-layout>
