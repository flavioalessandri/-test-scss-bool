require('./bootstrap');

window.moment = require('moment');

window.$ = require('jquery');

function getChart(datas, arrayNumberOfCLick, arrayCurrentDatas){

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: arrayCurrentDatas,
          datasets: [{
              label: 'Numero di Click',
              data: arrayNumberOfCLick,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}


function getData(id){
  console.log('ENTER');

  $.ajax({
    url:"/api/statistic/" + id,
    method:'GET',
    success: function(data,state){


      var datas = data[0];
      console.log("DATA", data);

      var arrayNumOfClick = [];

      for (var i = 0; i < 4; i++) {
        var re= Math.floor(Math.random() * (7 - 1)) + 1;
        arrayNumOfClick.push(re);
      }
      var arrayCurrentDatas = ['2020-10-27','2020-10-28','2020-10-29'];

      for (let key in data) {
        arrayNumOfClick.push(data[key]['number_of_click']);
        arrayCurrentDatas.push(data[key]['current_date']);
      }

      console.log("alt",arrayNumOfClick,arrayCurrentDatas );

      // var arrayCurrentDatas = [];
      //
      // for (let key in data) {
      //
      //   console.log(key, data[key]['current_date']);
      //   arrayCurrentDatas.push(data[key]['current_date']);
      // }

      console.log("arrayCurrentDatas",arrayCurrentDatas);

      getChart(datas, arrayNumOfClick, arrayCurrentDatas);

      // getDataValue(data,lat,lng);
    },
    error: function(err) {
      console.log('error', err);
    }
  });
}




function init(){

  var id = $('#mychartId').text();

  console.log("MI ID", id);
  getData(id);

}

$(document).ready(init);
