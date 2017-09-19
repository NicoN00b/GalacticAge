import { SolarCalc } from './../js/solar.js';

$(document).ready(function(){
  $('#difference').onclick(function(event) {
    event.preventDefault();
    $('.diff-output').show();
    let dateX = $('#start-date').val();
    console.log(dateX);
    let dateY = $('#end-date').val();
    console.log(dateY);
    let calculate2 = new SolarCalc();
    let diffSecond = calculate2.secondDiff(date, date);
    $('#diff').html("There are " + diffSecond + " seconds between the two dates.");
  });
});
