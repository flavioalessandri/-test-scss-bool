<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Apartment;
use App\Statistic;


use Illuminate\Support\Facades\Cookie;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Http\Response;


class ChartClickController extends Controller

{

  public function statistic( Request $request )
    {
         $data = $request['id'];
         $this->statisticJson( $request);
         return view('statistic', compact('data'));
    }

    public function statisticJson( Request $request )

    {
      $id = $request['id'];
      $statistic = Statistic::where('apartment_id',"=", $id)
        ->get();
      return response()->json($statistic);
    }



}
