@extends('layouts.main-layout')
{{-- @section('header')
  @include('partials.header1')
@endsection --}}
@section('content')
<div class="container">
  <div id="div-search" class="flex mb-4 mt-0">
    <div class="white-radius-center">
      <input type="search" value="" name="places" id="mysearch" placeholder="Cerca appartamento">
      {{-- <div class="search"> --}}
        <!-- <a href="#"><i class="fas fa-search"></i></a> -->
        {{-- <i class="fas fa-search"></i> --}}
      {{-- </div> --}}
    </div>
    <span id="mylatitude">{{$lat}}</span>
    <span id="mylongitude">{{$lng}}</span>
  </div>

  <div class="row justify-content-center">

    <div class="col-md-8">

      <div class="card">

        <div class="card-header">

          <h1 class="text-center">Risultati</h1>
        </div>

        <div id="slidecontainer">
          <p>Scegli il raggio in km:</p>
          <input id="mySliderRadius" type="range" min="1" max="100000" value="20000">

          <p>km: <span id="sliderValue"></span></p>
        </div>

        <div id="search-sauna" class=" pl-5 col-12">
          <label for="sauna">Sauna</label>
          <input type="checkbox" name="sauna">
        </div>
<<<<<<< HEAD


        <div id="hand-target">
=======
        <!-- selezione numero minimo camere e letti -->
        <div class="searchOptions">
          <label for="min-rooms">Numero minimo di stanze</label>
            <select id="min-rooms" name="min-rooms">
              <option selected value="1"></option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">Maggiore di 6</option>
            </select>
            
            <label for="min-beds">Numero minimo di letti</label>
              <select id="min-beds" name="min-beds">
                <option selected value="1"></option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">Maggiore di 6</option>
              </select>
        </div>
>>>>>>> 22be367d65919375c2d502b617a3493c0ca66199


        </div>


        <div class="card-body">

          <ul id="target">

            {{-- coontenitore per le card che verranno visualizzate !! --}}

          </ul>

        </div>
      </div>
    </div>
  </div>
</div>
<script src="{{ asset('js/app2.js') }}" defer></script>

@endsection
