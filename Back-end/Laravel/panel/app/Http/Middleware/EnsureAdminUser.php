<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureAdminUser
{
    public function handle(Request $request, Closure $next)
    {
        // Allow only user with ID 1 as admin
        if (auth()->check() && auth()->id() == 1) {
            return $next($request);
        }

        // Redirect non-admin users to home with an error message
        return redirect('/')->with('error', 'Unauthorized access');
    }
}
