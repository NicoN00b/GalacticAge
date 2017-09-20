import { SolarCalc } from './../js/solar.js';

$(document).ready(function() {
  $('#ageForm').submit(function(event) {
    event.preventDefault();
    $('.output').show();
    const birthDate = $('#birthDate').val();
    let calculate = new SolarCalc();

    const ageSeconds = calculate.ageSeconds(birthDate);
    const standardAge = calculate.getStandardAge(birthDate);
    const mercuryAge = calculate.mercury(birthDate);
    const venusAge = calculate.venus(birthDate);
    const marsAge = calculate.mars(birthDate);
    const jupiterAge = calculate.jupiter(birthDate);
    const lifeEx = calculate.lifeExpectancy(birthDate);
    console.log(lifeEx);
    const timeLeft = calculate.timeLeft(birthDate);
    console.log(timeLeft);

    $('#earth-output').html(standardAge);
    $('#seconds-output').html("Your age in seconds: " + ageSeconds);
    $('#mercury-output').html(mercuryAge);
    $('#venus-output').html(venusAge);
    $('#mars-output').html(marsAge);
    $('#jupiter-output').html(jupiterAge);
    $('#ex-output').html(timeLeft);

  });

  $('#difference').submit(function(event) {
    event.preventDefault();
    $('.diff-output').show();
    let d1= $('#start-date').val();
    console.log(d1);
    let d2 = $('#end-date').val();
    console.log(d2);
    let calculate = new SolarCalc();
    const diffSecond = calculate.secondDiff(d1, d2);
    console.log(diffSecond);
    $('#diff').html("There are " + diffSecond + " seconds between the two dates.");
  });
});
