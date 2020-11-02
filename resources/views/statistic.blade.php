@extends('layouts.main-layout')
@section('content')



  <section id="section">

    <div class="container">
      <div class="col-6 mb-5">

    <div id="views-chart" class="chart" style="background-color: white;position: relative; height:auto; width:80vw">

                <canvas id="myChart" > </canvas>

        <div id="chart-prev" style="position: absolute; top:50%;left:0; z-index:3;"><i class="fas fa-chevron-circle-left"></i> </div>
        <div id="chart-next" style="position: absolute; top:50%; right:0;z-index:3;"><i class="fas fa-chevron-circle-right"></i> </div>

    </div>

    <div id="message-chart" class="chart" style="background-color: white;position: relative; height:auto; width:80vw">
      <canvas id="mymessageChart" ></canvas>

    </div>


  </div>

  </div>

  </section>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

  <script src="{{asset('js/mychart.js')}}" charset="utf-8"></script>


@endsection
