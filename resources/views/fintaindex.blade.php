@extends('layouts.main-layout')


@section('content')

  <div class="container">


    @foreach ($aparts as $apart)
      <div class="card">

        @for ($i=0; $i < count($apart->images); $i++)
         count {{count($apart->images)}}

        @endfor

        <h2>{{$apart->id}}</h2>
        <h4>{{$apart->city}}</h4>
        <h5>{{$apart->address}}</h5>
        <a  class="btn btn-primary" href="{{route('apart.guest.show', $apart->id)}}">VAI ALLA SHOW E FAI CLICK</a>

      </div>
    @endforeach

    </div>

  @endsection
