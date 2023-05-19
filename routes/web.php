<?php

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

Route::get('/', function () {
	return redirect('/h5');
    // return view('welcome');
});
Route::group([
    'namespace' => '\App\Http\Controllers',
    'middleware'=> [],
    'prefix'    => '',
    'as'        => '',
], function(){
    Route::post('/links', 'IndexController@index')->name('index');
});
