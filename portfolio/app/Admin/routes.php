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
    $router->resource('/projets', ProjetAdminController::class);
    $router->resource('/technos', TechnoAdminController::class);
    $router->resource('/lienExts', LienExtsAdminController::class);
    $router->resource('/messages', MessageAdminController::class);
    $router->resource('/experiences', ExperienceAdminController::class);
    $router->resource('/formations', FormationAdminController::class);


});
