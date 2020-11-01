
window.$ = require('jquery');


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
        // getData(lat,lng);
        sliderRadius(lat,lng);
      });

  }
// selezioni aggiuntive
  function selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception) {
    var me = $(this);
    // console.log(me);
    // console.log(sauna);
    var isSelected = me.is('selected');
    console.log(lat,lng);

    const algoliasearch = require('algoliasearch');

    const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
    const index = client.initIndex('apartments');
    // if($('#address').val()){

      index.setSettings({
      attributesForFaceting: [
        'services', // or 'filterOnly(categories)' for filtering purposes only
      ]
      }).then(() => {
      // done
      });

      index.search('', {
        aroundLatLng: [parseFloat(lat) , parseFloat(lng)],
        // aroundLatLng: [41.9 , 12.5 ],
        aroundRadius: $("#mySliderRadius").val(),
        filters:'services:'+ sauna + ' AND services: ' + wifi + ' AND services: ' + parking + ' AND services: ' + vistaMare + ' AND services: ' + pool + ' AND services: ' + reception +
                ' AND number_of_rooms >= ' + $('#min-rooms').val() + ' AND ' +`number_of_beds >= `+ $('#min-beds').val(),
        // filters: `number_of_beds >= `+ $('#min-beds').val(),
        hitsPerPage: 20
      }).then(({ hits }) => {
        // console.log(hits);
        printData(hits);

      });

  }

  function optionListener(lat,lng,sauna,wifi,parking,vistaMare,pool,reception) {
    var targetRoom = $('#min-rooms');
    var targetBed = $('#min-beds');
    var saunaTarget = $('#saunaCheck');
    var wifiTarget = $('#wifiCheck');
    var parkingTarget = $('#parkingCheck');
    var seaTarget = $('#seaCheck');
    var poolTarget = $('#poolCheck');
    var receptionTarget = $('#receptionCheck');

    targetRoom.change(function(){selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);});
    targetBed.change(function(){selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);});
    // saunaTarget.change(saunaToggle);
    saunaTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        sauna = 3;
        console.log('si',sauna);
        // selectSauna(lat,lng);
      }
      else {
        sauna = 0;
        console.log('no',sauna);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

    wifiTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        wifi = 1;
        console.log('si',wifi);
        // selectSauna(lat,lng);
      }
      else {
        wifi = 0;
        console.log('no',wifi);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

    parkingTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        parking = 2;
        console.log('si',parking);
        // selectSauna(lat,lng);
      }
      else {
        parking = 0;
        console.log('no',parking);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

    seaTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        vistaMare = 4;
        console.log('si',vistaMare);
        // selectSauna(lat,lng);
      }
      else {
        vistaMare = 0;
        console.log('no',vistaMare);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

    poolTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        pool = 5;
        console.log('si',pool);
        // selectSauna(lat,lng);
      }
      else {
        pool = 0;
        console.log('no',pool);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

    receptionTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        reception = 6;
        console.log('si',reception);
        // selectSauna(lat,lng);
      }
      else {
        reception = 0;
        console.log('no',reception);
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
    });

  }

// slider
function sliderRadius(lat,lng,sauna,wifi,parking,vistaMare,pool,reception) {
  console.log(lat,lng,'slider');

      var slider = $("#mySliderRadius");
    // console.log(slider.val());
    // console.log('slider change',lat,lng);
    var output = $("#sliderValue");
    output.append(slider.val()/1000);

    slider.on('change', function() {
      output.html('');
      output.append(slider.val()/1000);

      console.log('slider change',lat,lng,slider.val());
      const algoliasearch = require('algoliasearch');

      const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
      const index = client.initIndex('apartments');
      // if($('#address').val()){
        index.setSettings({
        attributesForFaceting: [
          'services', // or 'filterOnly(categories)' for filtering purposes only
        ]
        }).then(() => {
        // done
        });

        index.search('', {
          aroundLatLng: [parseFloat(lat) , parseFloat(lng)],
          // aroundLatLng: [41.9 , 12.5 ],
          // filters:'services:'+ sauna + ' AND services: ' + wifi + ' AND services: ' + parking + ' AND services: ' + vistaMare + ' AND services: ' + pool + ' AND services: ' + reception +
          //         ' AND number_of_rooms >= ' + $('#min-rooms').val() + ' AND ' +`number_of_beds >= `+ $('#min-beds').val(),
          aroundRadius: slider.val(),
          hitsPerPage: 20
        }).then(({ hits }) => {
          printData(hits);

        });


    });
}


// richiamo i dati e faccio semplice selezione con lat e lng

  function printData(hits) {


  console.log('printData');

  var handtemplate = $('#handlebar-template').html();
  var compiled = Handlebars.compile(handtemplate);
  // var handtargetSpons = $('#hand-target-spons');
  var handtarget = $('#hand-target');
  handtarget.text('');

    for (var i = 0; i < hits.length; i++) {

      var hit = hits[i];
      var imgs = hit['imgs'];
      var img = imgs[0];
      hit['img'] = img;
      console.log(i,hit);
      var resultHtml = compiled(hit);

        handtarget.append(resultHtml);
    }
  }

  function getResults(objects,lat,lng) {

  const algoliasearch = require('algoliasearch');

  const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
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
  })
  .then(({ hits }) => {
    // console.log('hits',hits);
    // printData(hits);
  });

  var raggio = 20 * 1000;
  console.log(raggio);
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

function init() {
  console.log(' START Js/app2');
  var wifi = 0;
  var parking = 0;
  var sauna = 0;
  var vistaMare = 0;
  var pool = 0;
  var reception = 0;

  var lat = $('#mylatitude').text();
  var lng = $('#mylongitude').text();
  getData(lat,lng);
  console.log(lat,lng);
  search();
  sliderRadius(lat,lng);
  optionListener(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
}

$(document).ready(init);
