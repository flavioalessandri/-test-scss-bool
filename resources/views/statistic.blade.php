@extends('layouts.main-layout')
@section('content')



  <section id="section" style="background-color:white;">
    {{-- <div id = "mychartId" > {{$data}} </div> --}}
    <div class="container">
      <div class="col-6 mb-5">





    <canvas id="myChart" width="200" height="200" style="margin-top:200px; margin-left:auto; margin-right:auto"></canvas>

    <div id="chart-prev" ><i class="fas fa-chevron-circle-left"></i> </div>
    <div id="chart-next" ><i class="fas fa-chevron-circle-right"></i> </div>


  </div>

  </div>

  </section>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

  <script src="{{asset('js/mychart.js')}}" charset="utf-8"></script>


@endsection
