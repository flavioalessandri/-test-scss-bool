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
Route::get('list/apart/{id}', 'UserController@show')-> name('apart.show');

Route::get('/apart/{id}', 'GuestController@show')-> name('search.apart.show');
Route::post('/aparts','GuestController@latlng') -> name('aparts.search');

// Route::get('/index2','GuestController@index2') -> name('aparts.index');

Route::get('/aparts', function () {
    return view('welcome');
});

Route::get('/api/aparts', 'GuestController@index') -> name('apart-api-index');

// Braintree
Route::get('/sponsorship', 'SponsorshipController@choose')-> name('sponsor.choose');
Route::post('/checkout', 'SponsorshipController@checkout')-> name('sponsor.check');





//Chart
Route::post('/statistic/{id}', 'ChartClickController@statistic')->name('myroute');
Route::get('/api/statistic/{id}', 'ChartClickController@statisticJson')->name('statisticJson');

// messages
Route::post('/apart/message', 'MessageController@create') -> name('message.create');
Route::get('list/apart/{id}/msg', 'UserController@messageList') -> name('msgs.list');









Route::get('/api/statistic/message/{id}', 'ChartClickController@messageStatisticJson')->name('message.statisticJson');
