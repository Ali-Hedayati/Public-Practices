<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PanelAdmin;
use App\Http\Middleware\EnsureAdminUser;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


// Default route to show login form
Route::get('/', [AuthController::class, 'showLoginForm'])->name('welcome');

// Login route
Route::post('/login', function (Illuminate\Http\Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();

        // Store admin status in session (true if user ID is 1)
        $request->session()->put('is_admin', Auth::id() == 1);

        return redirect()->route('admin.panel');
    }

    return redirect()->route('welcome')->with('error', 'Invalid email or password.');
})->name('login');


// Logout route
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Signup routes
Route::get('/signup', [AuthController::class, 'showSignupForm'])->name('signup.form');
Route::post('/signup', [AuthController::class, 'signup'])->name('signup');

// Admin panel routes (protected by auth middleware)
Route::middleware(['auth', EnsureAdminUser::class])->group(function () {
    Route::get('/admin/panel', [PanelAdmin::class, 'getListUsers'])->name('admin.panel');
    Route::post('/admin/panel/store', [PanelAdmin::class, 'store'])->name('admin.store');

    Route::get('/filter-comments', [CommentController::class, 'index'])->name('comments.index');
    Route::get('/comments/{id}', [CommentController::class, 'show'])->name('comments.show');
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::put('/comments/{id}', [CommentController::class, 'update'])->name('comments.update');
    Route::delete('/comments/{id}', [CommentController::class, 'destroy'])->name('comments.destroy');
});


