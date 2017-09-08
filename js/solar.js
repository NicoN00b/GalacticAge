export class Solar {
  constructor(birthdate, otherDate){
    this.birthDate = birthDate;
    this.otherDate = otherDate;
  }


  calculateAge (birthDate, otherDate) {

      let years = (otherDate.getFullYear() - birthDate.getFullYear());

      if (otherDate.getMonth() < birthDate.getMonth() ||
          otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
          years--;
      }

      return years;
  }

};
