<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('content/cate', Content\CateController::class);
    $router->resource('content/country', Content\CountryController::class);
    $router->resource('content/product', Content\ProductController::class);

    $router->resource('sliders', Content\SliderController::class);
});
