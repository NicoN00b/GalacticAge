
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

  secondDiff(date1, date2){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return ((d1 - d2) / 1000);
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
    return "You are " + years + " years, " + days + " days, " + hours + " hours, "+ minutes + " minutes, " + seconds + " seconds, and counting.";
  }

  mercury(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let mercuryAge = Number((secondsAge/31556930.4) / 0.24).toFixed(6);
    return "On Mercury, you are " + mercuryAge + " years old.";
  }

  venus(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let venusAge = Number((secondsAge/31556930.4) / 0.62).toFixed(6);
    return "On Venus, you are " + venusAge + " years old.";
  }

  mars(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let marsAge = Number((secondsAge/31556930.4) / 1.88).toFixed(6);
    return "On Mars, you are " + marsAge + " years old.";
  }

  jupiter(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let jupiterAge = Number((secondsAge/31556930.4) / 11.86).toFixed(6);
    return "On Jupiter, you are " + jupiterAge + " years old.";
  }

  lifeExpectancy(){
    let lifeEx = (Math.random() * (89 - 49) + 49).toFixed(6);
    return lifeEx;
  }

  timeLeft(birthDate){
    let secondsAge = this.ageSeconds(birthDate);
    let lifeEx = this.lifeExpectancy();
    let earthAge = Number(secondsAge/31556930.4).toFixed(6);
    if (earthAge > lifeEx) {
      return ("You have already outlived your expectancy, Congratulations!");
    } else {
      const yearsLeft = (lifeEx - earthAge).toFixed(6);
      const mercTimeLeft = ((lifeEx - earthAge) * 0.24);
      const venusTimeLeft = ((lifeEx - earthAge) * 0.62);
      const marsTimeLeft = ((lifeEx - earthAge) * 1.88);
      const jupTimeLeft = ((lifeEx - earthAge) * 11.86);
      return ("You have " + yearsLeft + " years left on Earth, " + mercTimeLeft + " left on Mercury, " + venusTimeLeft + " left on Venus, " + marsTimeLeft + " left on Mars, and " + jupTimeLeft + " left on Jupiter.");
    }
  }

}
