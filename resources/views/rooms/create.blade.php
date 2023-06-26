<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Create') }}
        </h2>
    </x-slot>
    <x-slot name="slot">
        <div id="mainContent" class="h-full w-full flex flex-col justify-center items-center mt-5 gap-3">
            <form class="w-3/4" method="POST" action="{{route('rooms.store')}}" id="createForm">
                @csrf
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room</label>
                    <input placeholder="RC0000" type="text" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <label for="floor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the floor</label>
                <select id="floor" name="floor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="0" @if(Request::get('floor') === "0") selected @endif>Floor 0</option>
                    <option value="1" @if(Request::get('floor') === "1") selected @endif>Floor 1</option>
                    <option value="2" @if(Request::get('floor') === "2") selected @endif>Floor 2</option>
                    <option value="3" @if(Request::get('floor') === "3") selected @endif>Floor 3</option>
                </select>
            </form>
            <div class="mt-5">
                <button form="createForm" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                <button onclick="location.href='./';" type="button" class="focus:outline-none text-white bg-orange-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
            </div>
        </div>
    </x-slot>
</x-app-layout>
