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
          <input id="mySliderRadius" type="range" min="1" max="1000000" value="20000">

          <p>km: <span id="sliderValue"></span></p>
        </div>

        {{-- Hits and Map  --}}
        <section class="col-md-12 map_section">
          {{-- <div class="left-column">
          <input id="search-input" type="text" autocomplete="off" spellcheck="false" autocorrect="off" placeholder="Search by name, city, airport code..."/>
          <div id="hits"></div>
        </div> --}}

        <div class="right-column">
          <div id="mapApiGoogle"></div>
        </div>

        <div class="clear-both"></div>
      </section>
      {{-- /Hits and Map  --}}



        {{-- MAP TEMPLATE --}}
        <script type="text/template" id="hits-template">
          @{{#hits}}
          <div class="hit">
            <h3 class="hit-airport-code">@{{{ _highlightResult.iata_code.value }}}</h3>
            <h2 class="hit-name">@{{{ _highlightResult.name.value }}}@{{^ displayCity }} - @{{{ _highlightResult.city.value }}}@{{/displayCity}}</h2>
            <p class="hit-location">@{{{ _highlightResult.country.value }}}<span class="hit-distance"> @{{ distance }}</span></p>
          </div>
          @{{/hits}}
        </script>
        {{-- END MAP TEMPLATE --}}


        {{-- No-Results template --}}
      <script type="text/template" id="no-results-template">
        <div id="no-results-message">
          <p>We didn't find any airports in this location.</p>
        </div>
      </script>

        {{-- END map API  --}}




        <div id="search-sauna" class=" pl-5 col-12">
          <label for="sauna">Sauna</label>
          <input type="checkbox" name="sauna">
        </div>
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



        <div class="card-body">

          <ul id="target">

            {{-- coontenitore per le card che verranno visualizzate !! --}}

          </ul>

        </div>
      </div>
    </div>
  </div>
</div>
{{-- <script src="//cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js"></script> --}}
<script src="//cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
<script src="//cdn.jsdelivr.net/algoliasearch.helper/2/algoliasearch.helper.min.js"></script>
<script src="//cdn.jsdelivr.net/hogan.js/3.0.2/hogan.min.common.js"></script>
<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyAZctiuPDZMp28faClkz61dOcINbBikQDw"></script>

<script src="{{ asset('js/app2.js') }}" defer></script>

@endsection
