<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Apartment;
use App\Statistic;


use Illuminate\Support\Facades\Cookie;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Http\Response;

class StatisticController extends Controller
{

    public function statistic( Request $request )
    {
         $data = $request['id'];



         // passing data to another method in the same controller
         $this->statisticJson( $request);
         return view('statistic', compact('data'));
    }

    public function statisticJson( Request $request )
    {
      $data = $request['id'];
      $id = $data;
      // $id = 8;         //da modificare
      $apart= Apartment::findOrFail($id);
      $stat = $apart-> statistic()->get();
      return response()->json($stat);
      // dd($id);
    }




}
