<?php

namespace App\Http\Controllers;
use App\Apartment;
use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
  public function create (Request $request) {

    $data = $request -> all();
    $message = Message::create($data);
    $id = $message['apartment_id'];
    // dd($id);
    $data['apartment_id'] = $id;
    $apart = Apartment::findOrFail($id);
    $services = $apart -> services() -> get();
    // dd($apart);
    return view('show-guest-apartment',compact('apart','services'));
  }
}
