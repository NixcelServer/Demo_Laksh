<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\KeywordController;
use App\Http\Controllers\UOMController;
use App\Http\Controllers\CompanyRegistrationController;
use App\Http\Controllers\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/', function () {
    $data = [
        'message' => 'Welcome to our API!',
        'status' => 'success'
    ];

    return response()->json($data);
});

//admin login 
Route::post('/login',[AuthController::class,'login']);

//user registrtion
Route::post('/register',[AuthController::class,'register']);

//user login
Route::post('/logsin',[AuthController::class,'uLogin']);

//create uom
Route::post('/unit-of-measurements',[UOMController::class,'createUOM']);
Route::post('/unit-of-measurements',[UOMController::class,'createUOM']);

Route::get('/unit-of-measurements',[UOMController::class,'showUOM']);
Route::get('/unit-of-measurements',[UOMController::class,'showUOM']);

Route::delete('/unit-of-measurements/{id}',[UOMController::class,'deleteUOM']);
Route::delete('/unit-of-measurements/{id}',[UOMController::class,'deleteUOM']);

//create category
Route::post('/categories',[CategoryController::class,'createCategory']);

//view categories
Route::get('/categories',[CategoryController::class,'viewCategories']);

//delete categories
Route::delete('/categories/{id}',[CategoryController::class,'deleteCategory']);

//create sub category
Route::post('/sub-categories',[CategoryController::class,'createSubCategory']);

//view sub categories
Route::get('/sub-categories',[CategoryController::class,'viewSubCategories']);

//delete sub categories
Route::delete('/sub-categories/{id}',[CategoryController::class,'deleteSubCategory']);


//create keywords
Route::post('/keywords',[KeywordController::class,'createKeyword']);

//show keywords
Route::get('/keywords',[KeywordController::class,'showKeywords']);

//delete Keywords
Route::delete('/keywords/{id}',[KeywordController::class,'deleteKeywords']);

//Register your company
Route::post('/registeryourcompany',[CompanyRegistrationController::class,'registerCompany']);

//Register Products
Route::post('/registerProduct',[ProductController::class,'registerProduct']);

//get all admin
Route::get('/getall',[AdminController::class,'getAllAdmin']);

Route::post('/product/store',[ProductController::class,'storeProduct']);

Route::middleware(['preventBackHistory'])->group(function () {



});





