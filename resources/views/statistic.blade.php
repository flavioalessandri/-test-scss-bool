@extends('layouts.main-layout')
@section('content')



  <section id="section" style="background-color:white;">
    <div id = "mychartId" > {{$data}} </div>
    <div class="container">
      <div class="col-6">





    <canvas id="myChart" width="200" height="200"></canvas>

  </div>

  </div>

  </section>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

  <script src="{{asset('js/mychart.js')}}" charset="utf-8"></script>


@endsection
