@extends('layouts.main-layout')
{{-- @section('header')
  @include('partials.header1')
@endsection --}}
@section('content')

  <section id="section_home">



  <div id="div-search" class="flex" >
    <div class="white-radius-center w100">

      <form class="flex formSearch" action="{{route('aparts.search')}}" method="post">
          @csrf
          @method('POST')

            <input id="mysearch" type="search" name="places"  placeholder="Cerca">
            <div class="search">
              <button class='search' type="submit" name="button"><i class="fas fa-search"></i></button>
            </div>

            <input id="lat-form" type="text" class=" @error('description') is-invalid @enderror col-md-6" name="lat" value=""  required autocomplete="description" autofocus >

            <input id="lng-form" type="text" class=" @error('description') is-invalid @enderror col-md-6" name="lng" value=""  required autocomplete="description" autofocus >
        </form>

      {{-- <input type="text" name="" id="mysearch" placeholder="Cerca appartamento"> --}}
      {{-- <div class="search">
        <a href="#"><i class="fas fa-search"></i></a>
      </div> --}}
    </div>
  </div>
</section>
<script src="{{ asset('js/app1.js') }}" defer></script>
@endsection
