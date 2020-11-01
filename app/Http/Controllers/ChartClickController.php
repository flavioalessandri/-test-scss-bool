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
         // passing data to another method in the same controller
         $this->statisticJson( $request);
         return view('statistic', compact('data'));
    }

    public function statisticJson( Request $request )

    {
      $id = $request['id'];
      $statistic = Statistic::where('apartment_id',"=", $id)
        ->get();

      //   $array = array();
      //
      //   for ($i=0; $i < 12 ; $i++) {
      //
      //     $arr = array(
      //       'current_date' => "",
      //       'number_of_click'=> 0
      //               );
      //     array_push($array,$arr);
      //   };
      //
      //
      //
      // $cont = count($statistic);
      //
      // for ($i=0; $i < $cont ; $i++) {
      //
      //   if (  (Carbon::parse($statistic[$i]['current_date']) ->format('m') == strval($i) ) {
      //
      //     $newArr = array(
      //       'current_date' => $statistic[$i]['current_date'],
      //       'number_of_click'=> $statistic[$i]['number_of_click'],
      //           );
      // 
      //     array_replace($array, $newArr);
      //     }
      // }
      //
      // dd($array, $statistic,$cont);
      return response()->json($statistic);
    }



}
