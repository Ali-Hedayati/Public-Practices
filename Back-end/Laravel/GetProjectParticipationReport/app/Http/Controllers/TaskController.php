<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = ['Learn Laravel', 'Build a Project', 'Master PHP', "Next step"];
        return view('tasks', ['tasks' => $tasks]);
    }
    public function copyindex()
    {
        $tasks = ['1', '2', '3', "4"];
        return view('tasks', ['tasks' => $tasks]);
    }
}
