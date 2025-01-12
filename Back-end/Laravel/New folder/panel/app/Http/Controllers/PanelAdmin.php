<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PanelAdmin extends Controller
{
    // get all users
    public function getListUsers()
    {
        $users = User::all(); // Fetch all users from the database

        // Return view with users data
        return view('admin.panel', ['users' => $users]);
    }

    // add users
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return redirect()->route('admin.panel')
                ->withErrors($validator)
                ->withInput();
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return redirect()->route('admin.panel')->with('success', 'User created successfully!');
    }
}
