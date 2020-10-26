<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('partials.head')

    <body>

        <div id="app" class="flex-center position-ref full-height">

          {{-- <div class="bg_main_image"> --}}



            @if (Auth::check())

              @include('partials.header-logged')

              @else

                @include('partials.header-unlogged')

            @endif

            @yield('search')

          {{-- </div> --}}

          {{-- @yield('header') --}}
          @yield('content')



        </div>
    </body>
</html>
