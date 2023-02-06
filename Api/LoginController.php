<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);
        $user = Auth::attempt($data);

        if (!$user) {
            return response([
                'message' => 'Invalid Authentication',
                'status' => false,
            ], 401);
        } else {
            $user = User::where('email', $data['email'])->first();
            $token = $user->createToken('personalToken')->plainTextToken;

            return response([
                'user' => ['id' => $user->id, 'email' => $user->email, 'name' => $user->name],
                'status' => true,
                'token' => $token
            ], 200);
        }
    }
}
