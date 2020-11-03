// require('./bootstrap');
// window.$ = require('jquery');
// import { searchOnMap } from './mapApi.js';
// import { searchOnMapSlider } from './mapApiSlider.js';
//
//
// function printData(hits) {
// console.log('printData');
//   var target = $('#hand-target');
//   target.text("");
//     for (var i = 0; i < hits.length; i++) {
//       var hit = hits[i];
//       var id = hit['id'];
//       // console.log(hit,id);
//
//       var html = '<div class="card">' +
//                     '<div class="card-body">'+
//                       '<div class="d-flex flex-row flex-wrap">'+
//                         // '<div class="p-2">'+
//                         //   '<div class="image">' +
//                         //     '<img src="img/'+ hit['image'] + '"  alt="no-image-found">' +
//                         //   '</div>'+
//                         // '</div>' +
//                         '<div class="  pl-3 col-12 col-md-6 p-2 d-flex flex-column ">' +
//                             '<div class="border-bottom border-dark">'+
//                               '<h5 class="">' + hit['description'] +
//                                 '<br>' +
//                                 '<small class="text-muted">'  + hit['address'] + '-' + hit['city'] + '- -' +hit['state'] + '</small>' +
//                               '</h5>'+
//                             '</div>'+
//                             '<div class="flex-grow-1 text-secondary">'+
//                               '<div class="pt-2">'+
//                                 '<span>'+ hit['square_meters'] + 'mq  </span>' +
//                             '</div>' +
//                               '<div class="">' +
//                                 '<span class="pt-2"> Stanze:' + hit['number_of_rooms'] + '</span>'+
//                               '</div>' +
//                               '<div class="">' +
//                               '  <span class="pt-2"> Letti:' + hit['number_of_beds'] + '</span>'
//                               '</div>' +
//                             '</div>' +
//                       '</div>'+
//                     '</div>'+
//                   '</div>';
//       target.append(html);
//     }
//
// }
//
// function sliderRadius(lat,lng) {
//   // console.log(lat,lng,'slider');
//
//   var slider = $("#mySliderRadius");
//   var output = $("#sliderValue");
//   output.append(slider.val()/1000);
//
//   slider.on('change', function() {
//     output.html('');
//     output.append(slider.val()/1000);
//
//     var mySliderValue = slider.val();
//
//
//
//
//     // console.log('slider change',lat,lng);
//     const algoliasearch = require('algoliasearch');
//
//     const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
//     const index = client.initIndex('apartments');
//     // if($('#address').val()){
//       index.search('', {
//         aroundLatLng: [parseFloat(lat) , parseFloat(lng)],
//         // aroundLatLng: [41.9 , 12.5 ],
//         aroundRadius: slider.val(),
//         hitsPerPage: 20
//       }).then(({ hits }) => {
//         printData(hits);
//
//         searchOnMapSlider(lat, lng, mySliderValue);
//
//       });
//       // }
//
//     });
//
// }
//
// function getResults(objects,lat,lng) {
//
//
//   const algoliasearch = require('algoliasearch');
//
//   const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
//   const index = client.initIndex('apartments');
//
//   for (var i = 0; i < objects.length; i++) {
//     var object = objects[i];
//     object.objectID = 'App\Apartment::' + (i+1);
//   }
//   // console.log(objects);
//   index.saveObjects(objects).then(({ objectIDs }) => {
//   // console.log(objectIDs);
//   });
//
//   index.search('',{
//     aroundLatLng: lat + ',' + lng,
//     // aroundLatLng: '41.9, 12.5',
//     aroundRadius: 20 * 1000
//   })
//   .then(({ hits }) => {
//     // console.log('hits',hits);
//     printData(hits);
//   });
//
// }
//
// function getDataValue(aparts,lat,lng) {
//     // console.log('prima di modifica:', aparts);
//     for (var i = 0; i < aparts.length; i++) {
//       var apart = aparts[i];
//       var _geoloc = {
//         'lat': parseFloat(apart.lat),
//         'lng': parseFloat(apart.lng)
//       };
//       apart._geoloc = _geoloc;
//     }
//     // console.log(_geoloc);
//
//     // console.log('aparts:', aparts);
//
//       getResults(aparts,lat,lng);
//   }
//
//   function getData(lat,lng) {
//
//    $.ajax({
//      url:"/api/aparts",
//      method:'GET',
//      success: function(data,state){
//
//        // console.log(data,state);
//
//        getDataValue(data,lat,lng);
//
//
//      },
//      error: function(err) {
//        // console.log('error', err);
//      }
//    });
//  }
//
//
// function search(){
//
//
//    var places = require('places.js');
//    var placesAutocomplete = places({
//      appId: 'pl3L0GWSSXDR',
//      apiKey: '2e3513be338d19d42a81830c543b4aa8',
//      container: document.querySelector('#mysearch')
//    });
//
//         placesAutocomplete.on('change', function select(e) {
//           // var = $("#mySliderRadius").val();
//           $("#mySliderRadius").val(20000);
//           $('#sliderValue').text('');
//         var latlng = e.suggestion.latlng;
//         var lat = latlng.lat;
//         var lng = latlng.lng;
//         // console.log('1',latlng,lat,lng);
//
//         searchOnMap(lat, lng);
//
//         getData(lat,lng);
//         sliderRadius(lat,lng);
//       });
//
// }
// function selectMinRoomsBeds(lat,lng) {
//   var me = $(this);
//   // console.log(me);
//   var isSelected = me.is('selected');
//   console.log(lat,lng);
//
//   const algoliasearch = require('algoliasearch');
//
//   const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
//   const index = client.initIndex('apartments');
//   // if($('#address').val()){
//     index.search('', {
//       aroundLatLng: [parseFloat(lat) , parseFloat(lng)],
//       // aroundLatLng: [41.9 , 12.5 ],
//       aroundRadius: $("#mySliderRadius").val(),
//       filters: `number_of_rooms >= `+ $('#min-rooms').val() + ' AND ' +`number_of_beds >= `+ $('#min-beds').val(),
//       // filters: `number_of_beds >= `+ $('#min-beds').val(),
//       hitsPerPage: 20
//     }).then(({ hits }) => {
//       // console.log(hits);
//       printData(hits);
//
//     });
//
// }
//
// function optionListener(lat,lng) {
//   var targetRoom = $('#min-rooms');
//   var targetBed = $('#min-beds');
//   targetRoom.change(function(){selectMinRoomsBeds(lat,lng);});
//   targetBed.change(function(){selectMinRoomsBeds(lat,lng);});
// }
//
// function init() {
//   console.log(' START Js/app2');
//
//
//
//
//   var lat = $('#mylatitude').text();
//   var lng = $('#mylongitude').text();
//
//   // DEBUG:
//
//     // END DEBUG:
//   searchOnMap(lat, lng);
//
//   console.log(lat,lng);
//   search();
//   getData(lat,lng);
//   // sliderRadius(lat,lng);
//   // optionListener(lat,lng);
// }
//
// $(document).ready(init);



// ***********************************
// >>>>>>> bool-search-map
window.$ = require('jquery');

import { searchOnMap } from './mapApi.js';
import { searchOnMapSlider } from './mapApiSlider.js';
import { searchOnMapSliderChecked } from './mapApiSliderChecked.js';

// <<<<<<< HEAD
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
        searchOnMap(lat, lng);

        // mySliderValue(lat, lng);

      });

  }
// selezioni aggiuntive
  function selectMinRoomsBeds(lat,lng) {
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
        filters:'services:'+ $('#saunaCheck').val() + ' AND services: ' + $('#wifiCheck').val() + ' AND services: ' + $('#parkingCheck').val() + ' AND services: ' + $('#seaCheck').val() + ' AND services: ' + $('#poolCheck').val() + ' AND services: ' + $('#receptionCheck').val() +
                ' AND number_of_rooms >= ' + $('#min-rooms').val() + ' AND ' +`number_of_beds >= `+ $('#min-beds').val(),
        // filters: `number_of_beds >= `+ $('#min-beds').val(),
        hitsPerPage: 20
      }).then(({ hits }) => {
        // console.log(hits);
        printData(hits);
        console.log(hits, 'my hits 999');


        var slider = $("#mySliderRadius").val()
        searchOnMapSliderChecked(lat, lng, slider, hits);

      });

  }

  function optionListener(lat,lng) {
    var targetRoom = $('#min-rooms');
    var targetBed = $('#min-beds');
    var saunaTarget = $('#saunaCheck');
    var wifiTarget = $('#wifiCheck');
    var parkingTarget = $('#parkingCheck');
    var seaTarget = $('#seaCheck');
    var poolTarget = $('#poolCheck');
    var receptionTarget = $('#receptionCheck');

    targetRoom.change(function(){selectMinRoomsBeds(lat,lng);});
    targetBed.change(function(){selectMinRoomsBeds(lat,lng);});
    // saunaTarget.change(saunaToggle);
    saunaTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#saunaCheck').val(3);
        console.log('si',$('#saunaCheck').val());
        // selectSauna(lat,lng);
      }
      else {
          $('#saunaCheck').val(0);
        console.log('no',$('#saunaCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });



    wifiTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#wifiCheck').val(1);
        console.log('si',$('#wifiCheck').val());
        // selectSauna(lat,lng);
      }
      else {
        $('#wifiCheck').val(0);
        console.log('no',$('#wifiCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });

    parkingTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#parkingCheck').val(2);
        console.log('si',$('#parkingCheck').val());
        // selectSauna(lat,lng);
      }
      else {
        $('#parkingCheck').val(0);
        console.log('no',$('#parkingCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });

    seaTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#seaCheck').val(4);
        console.log('si',$('#seaCheck').val());
        // selectSauna(lat,lng);
      }
      else {
        $('#seaCheck').val(0);
        console.log('no',$('#seaCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });

    poolTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#poolCheck').val(5);
        console.log('si',$('#poolCheck').val());
        // selectSauna(lat,lng);
      }
      else {
        $('#poolCheck').val(0);
        console.log('no',$('#poolCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });

    receptionTarget.change(function() {
      var me = $(this);
      var isChecked = me.is(':checked');
      // console.log('first',sauna);
      if (isChecked) {
        $('#receptionCheck').val(6);
        console.log('si',$('#receptionCheck').val());
        // selectSauna(lat,lng);
      }
      else {
        $('#receptionCheck').val(0);
        console.log('no',$('#receptionCheck').val());
        // selectMinRoomsBeds(lat,lng);
      }
      selectMinRoomsBeds(lat,lng);
    });
    // sliderRadius(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);
  }

// >>>>>>> bool-search-map
// slider
function sliderRadius(lat,lng) {
  console.log(lat,lng,'slider');
  // console.log('options',sauna,wifi,parking,vistaMare,pool,reception);

      var slider = $("#mySliderRadius");
    // console.log(slider.val());
    // console.log('slider change',lat,lng);
    var output = $("#sliderValue");
    output.append(slider.val()/1000);

    slider.on('change', function() {
      output.html('');
      output.append(slider.val()/1000);
      // optionListener(lat,lng,sauna,wifi,parking,vistaMare,pool,reception);

      var mySliderValue = slider.val()

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
          filters:'services:'+ $('#saunaCheck').val() + ' AND services: ' + $('#wifiCheck').val() + ' AND services: ' + $('#parkingCheck').val() + ' AND services: ' + $('#seaCheck').val() + ' AND services: ' + $('#poolCheck').val() + ' AND services: ' + $('#receptionCheck').val() +
                  ' AND number_of_rooms >= ' + $('#min-rooms').val() + ' AND ' +`number_of_beds >= `+ $('#min-beds').val(),
          aroundRadius: slider.val(),
          hitsPerPage: 20
        }).then(({ hits }) => {

          searchOnMapSlider(lat, lng, mySliderValue);

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

  // function getResults(objects,lat,lng) {
  //   // console.log(objects);
  // const algoliasearch = require('algoliasearch');
  //
  // const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
  // const index = client.initIndex('apartments');
  //
  //
  // // console.log('ricerca',objects);
  // var raggio = 20 * 1000;
  // console.log(raggio);
  //
  // index.search('',{
  //   aroundLatLng: lat + ',' + lng,
  //   // aroundLatLng: '41.9, 12.5',
  //   aroundRadius: 20 * 1000
  // })
  // .then(({ hits }) => {
  //   console.log('hits',hits);
  //   printData(hits);
  // });
  //
  // }

  function getDataValue(aparts,lat,lng) {
    console.log('prima di modifica:', aparts);
    for (var i = 0; i < aparts.length; i++) {
      var apart = aparts[i];
      var _geoloc = {
        'lat': parseFloat(apart.lat),
        'lng': parseFloat(apart.lng)
      };
      apart._geoloc = _geoloc;

    }

    console.log('aparts:', aparts);
    const algoliasearch = require('algoliasearch');

    const client = algoliasearch('C50JGFH5DN', '4301d4422ac7e4fff78b3a9db7965ffc');
    const index = client.initIndex('apartments');

    for (var i = 0; i < aparts.length; i++) {
      var apart = aparts[i];
      apart.objectID = 'App\Apartment::' + (i+1);
    }
    // console.log(objects);

    index.saveObjects(aparts).then(({ objectIDs }) => {
    console.log(aparts);
    index.search('',{
      aroundLatLng: lat + ',' + lng,
      // aroundLatLng: '41.9, 12.5',
      aroundRadius: 20 * 1000
    })
    .then(({ hits }) => {
      console.log('hits',hits);
      printData(hits);
    });
    // getResults(aparts,lat,lng);
    });

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


  $('#wifiCheck').val(0);
  $('#saunaCheck').val(0);
  $('#parkingCheck').val(0);
  $('#seaCheck').val(0);
  $('#poolCheck').val(0);
  $('#receptionCheck').val(0);


  var lat = parseFloat($('#mylatitude').text());
  var lng = parseFloat($('#mylongitude').text());
  console.log(lat,lng,'oiasjdoisdoiasdoih');

  // mySliderValue(lat, lng);
  searchOnMap(lat, lng);
  getData(lat,lng);

  search();
  sliderRadius(lat,lng);
  optionListener(lat,lng);
}

$(document).ready(init);
