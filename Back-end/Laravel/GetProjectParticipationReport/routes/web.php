<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ReportController;


Route::get('/', function () {
    return view('welcome'); // Default view
});

Route::get('/tasks', [TaskController::class, 'index']);

Route::get('/copytasks', [TaskController::class, 'copyindex']);

// Route::post('/download-reports', [ReportController::class, 'downloadReports'])->name('download.reports');



Route::get('/batch-download', function () {
    // Replace $users with your actual array or fetched data
    $users = [
        ['full_name' => 'نفیسه انصاری قره آغاجی', 'national_code' => '2755618825'],
        ['full_name' => 'حمید آدینه', 'national_code' => '0622348302'],
    ];
    return view('download', compact('users'));
});


Route::get('/download-report-form', function () {
    return view('download-report'); // Ensure this is the correct file name
});

Route::get('/test', function () {
    return 'Laravel is working!';
});



Route::post('/download-report-batch', [ReportController::class, 'downloadReportBatch'])->name('download.report.batch');


// Route::get('/tasks', function () {
//     $tasks = ['Learn Laravel', 'Build a Project', 'Master PHP'];
//     return view('tasks', ['tasks' => $tasks]);
// });
