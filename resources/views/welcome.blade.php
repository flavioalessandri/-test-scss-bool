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
  <div class="sponsorship-welcome col-md-8 m-auto">
    @foreach ($aparts as $apart)

      <div class="sponsorship card ml-2 mr-2
      @if (($apart -> visibility) == 0)
      NoVisibility
      @endif
      " data-card="{{$count=0}}">
      <div class="card-body">
        <div class="d-flex flex-row flex-wrap">
          <div class="mycarousel">
            <div class="carousel-container">

              @foreach ($apart->images as $image)
                <div class="carousel-images dim  @if ($count==0) active  @endif
                " data-id="{{$count++}}">

                    <img src="{{asset($image->image_path)}}" alt="{{$image->image_path}}">

                </div>

              @endforeach
            </div>

            {{-- <div class="prev"><i class="fas fa-chevron-circle-left"></i> </div>
            <div class="next"><i class="fas fa-chevron-circle-right"></i> </div> --}}


          </div>


            <div class="  pl-4 pr-4 col-12 ">

                <div class="border-bottom border-white">
                  <h5 class="">
                    <a href="{{route('search.apart.show', $apart -> id)}}">{{ $apart -> description }}</a>
                    <br>
                    <small class=""> {{ $apart -> address }} - {{ $apart -> city }} - {{ $apart -> state }}  </small>
                  </h5>
                </div>

                <div class="flex-grow-1 text-secondary">
                  <div class="pt-2">
                    <span> {{ $apart -> square_meters }} mq  </span>
                </div>
                  <div class="">
                    <span class="pt-2"> Stanze: {{ $apart -> number_of_rooms }} </span>
                  </div>
                  <div class="">
                    <span class="pt-2"> Letti: {{ $apart -> number_of_beds }}  </span>
                  </div>
                </div>



            </div>

        </div>
      </div>
    </div>

  @endforeach
  </div>

  </section>
<script src="{{ asset('js/app1.js') }}" defer></script>
@endsection
