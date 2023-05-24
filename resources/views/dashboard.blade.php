<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="text-gray-200">
        <div class="flex justify-center items-center">
            <form action="{{route('import')}}" method="POST" enctype="multipart/form-data" name="importForm">
                @csrf
                <div class="flex justify-center items-center">
                    <input type="file" name="room_times" required class="rounded-md p-1 w-2/3">
                </div>
                <div class="flex justify-center items-center">
                    <label for="set_room_id">Select room to update:</label>
                    <select name="set_room" id="set_room_id" class="text-gray-800 rounded-md p-1 w-2/5">
                        <option value="1">RC001</option>
                        <option value="2">RC002</option>
                        <option value="3">RC003</option>
                        <option value="4">RC004</option>
                        <option value="5">RC005</option>
                    </select>
                </div>
                <div class="flex justify-center items-center">
                    <button type="submit" class="text-blue-600">Import</button>
                </div>
            </form>
        </div>
        <div>
            <table class="table-auto">
                <tr>
                    <th>Room ID</th>
                    <th>Room Name</th>
                </tr>
                @foreach($rooms as $room)
                    <tr>
                        <td>{{$room->id}}</td>
                        <td>{{$room->name}}</td>
                        @foreach($room->roomTime as $roomTime)
                            <td>{{$roomTime->time}}</td>
                            <td>{{$roomTime->co2}}</td>
                            <td>{{$roomTime->temperature}}</td>
                        @endforeach
                    </tr>
                @endforeach
            </table>
        </div>
    </div>
</x-app-layout>
