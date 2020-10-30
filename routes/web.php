<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'GuestController@welcome')->name('welcome');


// Route::get('/getc','GuestController@getCookie');
// Route::get('/setc','GuestController@setCookie');

Auth::routes();

Route::get('/list', 'UserController@usindex')-> name('user.index');
Route::get('/edit/{id}', 'UserController@edit')-> name('apart.edit');
Route::post('/update/{id}', 'UserController@update')-> name('apart.update');

Route::get('/create', 'UserController@create') -> name('apart.create');
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/store', 'UserController@store')-> name('apart.store');
Route::get('/destroyImage/{id}','UserController@destroyImage') -> name('destroy');
Route::get('/delete/{id}', 'UserController@delete')-> name('apart.delete');
Route::get('/user/apart/{id}', 'UserController@show')-> name('apart.show');

Route::get('/guest/apart/{id}', 'GuestController@show')-> name('apart.guest.show');
Route::post('/aparts','GuestController@latlng') -> name('aparts.search');


// Route::get('/aparts', function () {
//     return view('welcome');
// });

Route::get('/api/aparts', 'GuestController@index') -> name('apart-api-index');

Route::get('/fintaindex', 'GuestController@fintaIndex')-> name('fintaindex');


Route::post('/statistic/{id}', 'StatisticController@statistic')->name('myroute');
Route::get('/api/statistic/{id}', 'StatisticController@statisticJson')->name('statisticJson');
