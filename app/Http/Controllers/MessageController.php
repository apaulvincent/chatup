<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Events\MessageSentEvent;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetch()
    {
        return Message::with('user')->get();
    }

    public function fetchUser()
    {
        return Auth::user();
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);

        broadcast(new MessageSentEvent($user, $message))->toOthers();

        return ['status' => 'Message Sent!'];
    }
}
