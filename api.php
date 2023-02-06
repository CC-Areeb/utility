<?php

use App\Http\Controllers\Api\CategoryApiController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ProductApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Public routes
Route::post('/login', [LoginController::class, 'login']);


// Protected routes
Route::middleware(['auth:sanctum'])->group(function () {

    // Product routes
    Route::get('/products', [ProductApiController::class, 'index']);
    Route::get('/products/create', [ProductApiController::class, 'create']);
    Route::get('/products/{slug}/edit', [ProductApiController::class, 'edit']);
    Route::post('/products/{slug}/update', [ProductApiController::class, 'update']);
    Route::post('/products/store', [ProductApiController::class, 'store']);
    Route::delete('/products/delete/{id}', [ProductApiController::class, 'destroy']);

    // Category routes
    Route::get('/categories', [CategoryApiController::class, 'index']);
    Route::get('/categories/create', [CategoryApiController::class, 'create']);
    Route::get('/categories/{slug}/create', [CategoryApiController::class, 'edit']);
    Route::post('/categories/store', [CategoryApiController::class, 'store']);
    Route::post('/categories/update', [CategoryApiController::class, 'update']);
});