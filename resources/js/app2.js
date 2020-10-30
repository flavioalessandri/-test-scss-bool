require('./bootstrap');
window.$ = require('jquery');


function printData(hits) {


console.log('printData');

  var target = $('#target');
  target.text("");
    for (var i = 0; i < hits.length; i++) {
      var hit = hits[i];
      var id = hit['id'];
      console.log(hit,id);

      var html = '<div class="card">' +
                    '<div class="card-body">'+
                      '<div class="d-flex flex-row flex-wrap">'+

                        '<div class="  pl-3 col-12 col-md-6 p-2 d-flex flex-column ">' +
                            '<div class="border-bottom border-dark">'+
                              '<h5 class="">' + hit['description'] +
                                '<br>' +
                                '<small class="text-muted">'  + hit['address'] + '-' + hit['city'] + '- -' +hit['state'] + '</small>' +
                              '</h5>'+
                            '</div>'+
                            '<div class="flex-grow-1 text-secondary">'+
                              '<div class="pt-2">'+
                                '<span>'+ hit['square_meters'] + 'mq  </span>' +
                            '</div>' +
                              '<div class="">' +
                                '<span class="pt-2"> Stanze:' + hit['number_of_rooms'] + '</span>'+
                              '</div>' +
                              '<div class="">' +
                              '  <span class="pt-2"> Letti:' + hit['number_of_beds'] + '</span>'
                              '</div>' +
                            '</div>' +
                      '</div>'+
                    '</div>'+
                  '</div>';
      target.append(html);
    }

}

function sliderRadius(lat,lng) {
  console.log(lat,lng,'slider');

      var slider = $("#mySliderRadius");
    // console.log(slider.val());
    // console.log('slider change',lat,lng);
    var output = $("#sliderValue");
    output.append(slider.val()/1000);

    slider.on('change', function() {
      output.html('');
      output.append(slider.val()/1000)
      console.log('slider change',lat,lng);
      const algoliasearch = require('algoliasearch');

      const client = algoliasearch('S8BNJ70XAW', '5aebc8b11d46b93513ec53a38a3c23e1');
      const index = client.initIndex('apartments');
      // if($('#address').val()){
        index.search('', {
          aroundLatLng: [parseFloat(lat) , parseFloat(lng)],
          // aroundLatLng: [41.9 , 12.5 ],
          aroundRadius: slider.val(),
          hitsPerPage: 20
        }).then(({ hits }) => {
          printData(hits);
          // console.log('slider');
          // $('#myAlgoliaResults').html('');
          //
          // for (var i = 0; i < hits.length; i++) {
          //   $('#myAlgoliaResults').append(
          //     '<li>'
          //     + hits[i]['city']
          //     + '</li>'
          //   );
          // }
          // console.log(hits);
        });
      // }

    });
}

function getResults(objects,lat,lng) {


  const algoliasearch = require('algoliasearch');

  const client = algoliasearch('S8BNJ70XAW', '5aebc8b11d46b93513ec53a38a3c23e1');
  const index = client.initIndex('apartments');

  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.objectID = 'App\Apartment::' + (i+1);
  }
  // console.log(objects);
  index.saveObjects(objects).then(({ objectIDs }) => {
  // console.log(objectIDs);
  });

  index.search('',{
    aroundLatLng: lat + ',' + lng,
    // aroundLatLng: '41.9, 12.5',
    aroundRadius: 20 * 1000
  })
  .then(({ hits }) => {
    console.log('hits',hits);
    printData(hits);
  });

}

function getDataValue(aparts,lat,lng) {
    console.log('prima di modifica:', aparts);
    for (var i = 0; i < aparts.length; i++) {
      var apart = aparts[i];
      var _geoloc = {
        'lat': apart.lat,
        'lng': apart.lng
      };
      apart._geoloc = _geoloc;
    }

    console.log('aparts:', aparts);

      getResults(aparts,lat,lng);
  }

  function getData(lat,lng) {

   $.ajax({
     url:"/api/aparts",
     method:'GET',
     success: function(data,state){

       console.log(data,state);

       getDataValue(data,lat,lng);
     },
     error: function(err) {
       console.log('error', err);
     }
   });
 }


function search(){


   var places = require('places.js');
   var placesAutocomplete = places({
     appId: 'pl3L0GWSSXDR',
     apiKey: '2e3513be338d19d42a81830c543b4aa8',
     container: document.querySelector('#mysearch')
   });

        placesAutocomplete.on('change', function select(e) {
          // var = $("#mySliderRadius").val();
          $("#mySliderRadius").val(20000);
          $('#sliderValue').text('');
        var latlng = e.suggestion.latlng;
        var lat = latlng.lat;
        var lng = latlng.lng;
        console.log('1',latlng,lat,lng);

        getData(lat,lng);
        sliderRadius(lat,lng);
      });

}

function init() {
  console.log(' START Js/app2');

  var lat = $('#mylatitude').text();
  var lng = $('#mylongitude').text();
  console.log(lat,lng);
  // search();
  getData(lat,lng);
  // sliderRadius(lat,lng);
}

$(document).ready(init);
