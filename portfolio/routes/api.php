<?php

use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\FormationController;
use App\Http\Controllers\Api\LienExtController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\TechnoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjetController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('projets', ProjetController::class);

Route::apiResource('technos', TechnoController::class);

Route::apiResource('lienexts', LienExtController::class);

Route::apiResource('experiences', ExperienceController::class);

Route::apiResource('formations', FormationController::class);

Route::apiResource('messages', MessageController::class);


