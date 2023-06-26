<?php

use App\Http\Controllers\ModelController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\RoomTimeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ErrorController;
use App\Http\Controllers\UserController;



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

Route::get('/', function () {
    return view ("auth.login");
});

Route::get('/user/{user}/make-admin', [UserController::class, 'makeAdmin'])->name('user.make-admin');

Route::get('/admin', function () {
    return view('admin');
})->middleware('admin')->name('admin');

Route::resource('rooms', RoomController::class);
Route::get('/admin', [UserController::class, 'someMethod']);

Route::get('/rooms', function () {
    return view('rooms.index');
})->middleware('auth')->name('rooms');
use App\Models\Room; // Make sure to import your Room model at the top

Route::get('/rooms', function () {
    $rooms = Room::all();
    return view('rooms.index', ['rooms' => $rooms]);
})->middleware('auth', 'admin')->name('rooms.index');


Route::resource('lang', LanguageController::class);
Route::get('/lang/{lang}', 'App\Http\Controllers\LanguageController@switchLang')->name('switchLang');

Route::get('/import-data', [RoomTimeController::class, 'importData']);
Route::resource('rooms', RoomController::class);
Route::post('rooms/import', [RoomTimeController::class, 'import'])->name('import');
Route::post('rooms/import-bookings', [RoomTimeController::class, 'importBookings'])->name('import-bookings');
Route::delete('destroy', [RoomTimeController::class, 'destroy'])->name('destroy');

Route::get('/model', [RoomTimeController::class, 'showModel'])
    ->middleware(['auth', 'verified'])->name('model');

Route::get('/model-data/{roomName}', [RoomTimeController::class, 'getData']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback([ErrorController::class, 'notFound']);

Route::get('/model-co2', [RoomTimeController::class, 'getCo2Data']);

Route::get('/tempprofilepage')->name('profile');




require __DIR__.'/auth.php';
