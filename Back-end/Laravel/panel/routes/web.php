<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\PanelAdmin;

Route::get('/admin/panel', [PanelAdmin::class, 'getListUsers'])->name('admin.panel');
Route::post('/admin/panel/store', [PanelAdmin::class, 'store'])->name('admin.store');
