<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function makeAdmin(User $user) {
        $user->is_admin = true;
        $user->save();

        // redirect back with success message
        return redirect()->back()->with('success', 'User has been made admin successfully');
    }

    public function someMethod()
    {
        if (!auth()->user()) {
            // No user is logged in
            abort(403);
        }

        if (!auth()->user()->is_admin) {
            // User is not an admin
            abort(403);
        }
        return view('admin');
        // The rest of the controller method
    }


}
