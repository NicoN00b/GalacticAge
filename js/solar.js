
export class SolarCalc {
  constructor(birthDate){
    this.birthDate = birthDate;
  }
  // this.lifeEx = Math.random() * (89 - 49) + 49;  //Monaco upper average, Chad lower average, the world is an unstable place
  ageSeconds(birth){
    let now = new Date();
    let birthDate = new Date(birth);
    return ((now - birthDate) / 1000);
  }

  secondDiff(birthDateX, birthDateY){
    let birthDate1 = new Date(birthDateX);
    let birthDate2 = new Date(birthDateY);
    return ((birthDate1 - birthDate2) / 1000);
  }

  getStandardAge(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let remainder = secondsAge % 31556930.4;
    let years = (secondsAge - remainder)/31556930.4;
    let remainderDay = remainder % 86400;
    let days = (remainder - remainderDay) / 86400;
    let remainderHour = remainderDay % 3600;
    let hours = (remainderDay - remainderHour) / 3600;
    let remainderMin = remainderHour % 60;
    let minutes = (remainderHour - remainderMin) / 60;
    let remainderSec = remainderMin % 60;
    let seconds = (remainderMin - remainderSec) / 60;
    return "You are " + years + " years, " + days + " days, " + minutes + " minutes, " + seconds + " seconds, and counting.";
  }

  mercury(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let mercuryAge = Number((secondsAge/31556930.4) * 0.24).toFixed(6);
    return "On Mercury, you are " + mercuryAge + ".";
  }

  venus(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let venusAge = Number((secondsAge/31556930.4) * 0.62).toFixed(6);
    return "On Venus, you are " + venusAge + ".";
  }

  mars(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let marsAge = Number((secondsAge/31556930.4) * 1.88).toFixed(6);
    return "On Mars, you are " + marsAge + ".";
  }

  jupiter(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let jupiterAge = Number((secondsAge/31556930.4) * 11.86).toFixed(6);
    return "On Jupiter, you are " + jupiterAge + ".";
  }





}
