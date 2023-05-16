<?php

use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/model', function () {
    return view('model');
});

Route::resource('/', RoomController::class);
Route::get('/{index}', [RoomController::class, 'show'])->name('rooms.show');
Route::resource('/rooms', RoomController::class);
