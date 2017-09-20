import { SolarCalc } from './../js/solar.js';

describe('SolarCalc', function(){
  let calculate;
  let birthDate;

    beforeEach(function(){
      calculate = new SolarCalc();
      // let birth = new Date.now();
      birthDate = new Date();
    });

  it("should calculate a user's age in seconds", function(){
    let seconds = calculate.ageSeconds(birthDate);
    expect(seconds.toFixed(0)).toEqual('0');
  });

  it("should calculate seconds between two dates", function(){
    let secondsBetween = calculate.secondDiff('2003-07-05', '1985-07-05');
    expect(secondsBetween).toEqual(567993600);
  });

  it("should convert seconds to standard age", function() {
    let standardAge = calculate.getStandardAge(birthDate);
    expect(standardAge).toEqual("You are 0 years, 0 days, 0 hours, 0 minutes, 0 seconds, and counting.");
  });

  it("should convert age to Mercurian years", function () {
    let mercuryAge = calculate.mercury(birthDate);
    expect(mercuryAge).toEqual("On Mercury, you are 0.000000 years old.");
  });

  it("should convert age to Venetian years", function () {
    let venusAge = calculate.venus(birthDate);
    expect(venusAge).toEqual("On Venus, you are 0.000000 years old.");
  });

  it("should convert age to Martian years", function () {
    let marsAge = calculate.mars(birthDate);
    expect(marsAge).toEqual("On Mars, you are 0.000000 years old.");
  });

  it("should convert age to Jupiterian years", function () {
    let jupiterAge = calculate.jupiter(birthDate);
    expect(jupiterAge).toEqual("On Jupiter, you are 0.000000 years old.");
  });

  it("should calculate user's life expectancy randomly", function () {
    let lifeEx = calculate.lifeExpectancy();
    expect(lifeEx).toBeGreaterThan(48);
  });

  it("should return difference between earthAge and Life Ex", function() {
    let birthDate = new Date("1917-01-01");
    let timeLeft =  calculate.earthTimeLeft(birthDate);
    expect(timeLeft).toEqual("You have already outlived your expectancy, Congratulations!");
  });

});
