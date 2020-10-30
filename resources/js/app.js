
require('./bootstrap');

// require('./js/app1');
// require('./js/app2');

window.Vue = require('vue');
window.$ = require('jquery');

function imgPreview (input, imgPreviewPlaceholder) {
  if (input.files) {

    console.log(input.files);
    var filesAmount = input.files.length;

    for (i = 0; i < filesAmount; i++) {
      var reader = new FileReader();
      reader.onload = function(event) {
        $($.parseHTML('<img>')).attr('src', event.target.result).addClass('image_prev_size').appendTo(imgPreviewPlaceholder);
      }

      reader.readAsDataURL(input.files[i]);
    }
  }
}

function nextCarouselImg() {

  console.log("NEXTCLICK");
  var firstImage= $(this).siblings('.carousel-container').children().first();
  var arrayLenght = $(this).siblings('.carousel-container').children().length;
  var activeImage = $(this).siblings('.carousel-container').children('.active');

  if ( $(activeImage).data( "id" ) !== (arrayLenght-1)) {
    $(activeImage).removeClass('active');
    $(activeImage).next().addClass('active');

  }else{
    $(activeImage).removeClass('active');
    $(firstImage).addClass('active');
  }
}

function prevCarouselImg() {

    console.log("PREVCLICK");
  var firstImage = $(this).siblings('.carousel-container').children().first();
  var lastImage =$(this).siblings('.carousel-container').children().last();
  var arrayLenght = $(this).siblings('.carousel-container').children().length;
  var activeImage = $(this).siblings('.carousel-container').children('.active');

  if ( $(activeImage).data( "id" ) !== 0 ) {
    $(activeImage).removeClass('active');
    $(activeImage).prev().addClass('active');

  }else{
    $(activeImage).removeClass('active');
    $(lastImage).addClass('active');
  }
}




function init(){


  $("#mycreate").on('click', function() {

    $("#create_city").val("nuovo Valore");

  });


  console.log("APP JS");

  $('.next').on('click', nextCarouselImg);

  $('.prev').on('click', prevCarouselImg);

    $('div.create > #img-inp').on('change', function() {
        imgPreview(this, 'div.imgCreatePreview');
    });

    $('#form-img-layout > #images').on('change', function() {
        imgPreview(this, 'div.imgEditPreview');
    });

}

$(document).ready(init);




// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//
// const app = new Vue({
//     el: '#app',
// });
