<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('index');
});

Route::post('/find', 'FindVowelsController@find_vowels');
Route::get('/fetch-history', 'FindVowelsController@fetch_history');

//getting CSRF TOKEN
Route::get('/token', function(){return csrf_token();});


Route::get('/{any}', function () {
    return view('index');
});



