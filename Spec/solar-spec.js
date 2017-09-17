import { SolarCalc } from './../js/solar.js';

describe('SolarCalc', function(){
  let calculate;
  let birthDate;

    beforeEach(function(){
      calculate = new SolarCalc();
      birthDate = '1985-07-05';
    });

  it("should calculate a user's age in seconds", function(){
    let seconds = calculate.ageSeconds(birthDate);
    expect(seconds).toEqual(1);
  }); //this refactoring is cleaner, but the test can't pass in real time as it depends on the Date(), which is always changing... it fails as it should

  it("should calculate seconds between two dates", function(){
    let secondsBetween = calculate.secondDiff('2003-07-05', '1985-07-05');
    expect(secondsBetween).toEqual(567993600);
  });

  it("should convert seconds to standard age", function() {
    let standardAge = calculate.getStandardAge('1985-07-05');
    expect(standardAge).toEqual("You are 32 years, 73 days, 16 hours, 41 minutes, 32 seconds and counting");
  }); //again, it will always fail.

  it("should convert age to Mercurian years", function () {
    let mercuryAge = calculate.mercury('1985-07-05');
    expect(mercuryAge).toEqual("On Mercury, you are 14.");
  });

  it("should convert age to Venetian years", function () {
    let venusAge = calculate.venus('1985-07-05');
    expect(venusAge).toEqual("On Venus, you are" + venusAge + ".");
  });

  it("should convert age to Martian years", function () {
    let marsAge = calculate.mars('1985-07-05');
    expect(marsAge).toEqual("On Mars, you are 50.");
  });

  it("should convert age to Jupiterian years", function () {
    let jupiterAge = calculate.jupiter('1985-07-05');
    expect(jupiterAge).toEqual("On Jupiter, you are 600.");
  });
});
