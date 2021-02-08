<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Passport\Token;
use Laravel\Passport\Http\Controllers\AccessTokenController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*Route::post('login',[AccessTokenController::class,'issueToken'])->middleware(['api_login','throttle']);*/
/*Route::group(['middleware' => ['cors', 'json.response']], function () {


*/


     Route::group(['prefix' => 'auth',
     	'middleware' => ['cors', 'json.response']

], function () {
    Route::post('login', 'Auth\ApiAuthController@login');
    Route::post('signup', 'Auth\ApiAuthController@signup');
  Route::get('signup/activate/{token}', 'Auth\ApiAuthController@signupActivate');
    Route::group([
      'middleware' => 'auth:sanctum'
    ], function() {


        Route::get('logout', 'Auth\ApiAuthController@logout');
        Route::get('user', 'Auth\ApiAuthController@user');
    });
    });
     Route::group([
/*    'namespace' => 'Auth',
*/    'middleware' => 'auth:sanctum',
    'prefix' => 'password'
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');

});

 Route::group([
/*   'middleware' => 'auth:sanctum'
*/], function () {

Route::get('/bhim','CrudController@index')->name('cruddisply');

Route::post('/contact','CrudController@store')->name('crudestore')->middleware('auth:api');
Route::get('edit/{id}','CrudController@edit')->name('crud.display');
Route::post('update/{id}','CrudController@update')->name('updatecrud');
Route::get('/delete/{id}','CrudController@delete')->name('cruddelete');


Route::post('/category/store','CategoryController@store')->name('crudeestore');
Route::get('/category/edit/{id}','CategoryController@edit')->name('crud.display');
Route::post('category/save/{id}','CategoryController@save')->name('updatecrud');
Route::get('category/delete/{id}','CategoryController@delete')->name('cruddelete');
Route::get('/category','CategoryController@index')->name('cateview')->middleware('auth:sanctum');


Route::post('/tag/store','Api\TagController@store')->name('crudeestore');
Route::get('/tag/edit/{id}','Api\TagController@edit')->name('crud.display');
Route::post('tag/save/{id}','Api\TagController@save')->name('updatecrud');
Route::get('tag/delete/{id}','Api\TagController@delete')->name('cruddelete');
Route::get('/tag','Api\TagController@index')->name('cateTag');

Route::post('/fotter/{id}','Api\FotterController@update');
Route::get('/fotter/data','Api\FotterController@index');



Route::post('post/store','Api\PostsController@store')->name('crudeestore');
Route::get('/post/edit/{id}','Api\PostsController@edit')->name('crud.display');
Route::post('post/save/{id}','Api\PostsController@save')->name('updatecrud');
Route::get('post/destroy/{id}','Api\PostsController@destroy')->name('cruddelete');
Route::get('/post/index','Api\PostsController@index')->name('cateTag');
Route::get('/post/create','Api\PostsController@create')->name('cateTafg');

Route::get('/post/switch/{id}/{pid}','Api\PostsController@switch')->name('switch');

Route::get('/post/slider/{id}','Api\PostsController@slider');
Route::get('/post/carousel/{id}','Api\PostsController@carousel');
Route::get('/post/maincontent/{id}','Api\PostsController@maincontent');

Route::post('/follow/{id}','Api\FollowController@friend')->name('friend');
Route::get('/followers/{id}','Api\FollowController@followers')->name('friends');


Route::post('/navbar/create','Api\NavbarclientController@create')->name('navbar');




/*subpost*/





















});

/*profile*/

Route::get('/profile','Api\ProfileController@index')->name('profile');
Route::post('/profile/save/{id}','Api\ProfileController@save')->name('profilesave');






















/*client side*/
Route::get('/client/post','User\ClientController@index')->name('postname');







Route::get('/othersubpost','User\ClientController@otherpost');

Route::post('/subpost/{id}','User\ClientController@singlepost');

Route::get('/categorypost/{id}','User\ClientController@categorypost');


Route::get('/client/post/carousel','User\ClientController@mainslider');

Route::get('/client/fotter','User\ClientController@fotter');
Route::get('/follow','Api\FollowController@index')->name('follow');
Route::get('/navbar','Api\NavbarclientController@index')->name('navbar');
