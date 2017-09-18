
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

  secondDiff(dateX, dateY){
    let date1 = new Date(dateX);
    let date2 = new Date(dateY);
    return ((date1 - date2) / 1000);
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

  lifeExpectancy(birthDate){
    let lifeEx = (Math.random() * (89 - 49) + 49).toFixed(6);
    console.log("homies " + lifeEx);
    let mercuryLifeEx = lifeEx * 0.24;
    console.log('homies' + mercuryLifeEx);
    let venusLifeEx = lifeEx * 0.62;
    let marsLifeEx = lifeEx * 1.88;
    let jupiterLifeEx = lifeEx * 11.86;
  }

    // let secondsAge = ageSeconds(this.birthDate);
    // console.log(secondsAge);
    // if ((secondsAge / 31556930.4) > lifeEx) {
    //   return "You have already outlived your expectancy, Congratulations!";
    // } else {
    //   const timeLeft = (lifeEx - (secondsAge / 31556930.4)).toFixed(6);
    //   const mercTimeLeft = (mercuryLifeEx - mercury).toFixed(6);
    //   const venusTimeLeft = (venusLifeEx - this.venus).toFixed(6);
    //   const marsTimeLeft = (marsLifeEx - this.mars).toFixed(6);
    //   const jupTimeLeft = (jupiterLifeEx - this.jupiter).toFixed(6);
    //   return "You have " + timeLeft + " years left on Earth, " + mercTimeLeft + " years left on Mercury, " + venusTimeLeft + " years left on Venus, " + marsTimeLeft + " years left on Mars, and " + jupTimeLeft + " years left on Jupiter.  Make the most of it.";
    // }








}
