export class Calculator{
  constructor(age=0, date1=0, date2=0){
    this.age=age;
    this.date1=date1;
    this.date2=date2;
  }

//convert AGE TO SECONDS
  calculateAgeInSeconds(){
    return "Your age in seconds is: "+this.age*31536000+" seconds.";
  }

//result DATE DIFFERENCE
  calculateDiffOfDates(){
    let diff=Math.abs((this.date1-this.date2)/1000);
    console.log("The difference in seconds between the two dates is: "+diff+ " seconds.");
    return "The difference in seconds between the two dates is: "+diff+ " seconds.";

  }

//convert AGE TO MERCURY YEARS
  calculateAgeInMercuryYears(){
    let mercuryAge=this.age/.24;
    console.log("Your age in Mercury years is: "+mercuryAge+" years.");
    return mercuryAge;
  }

//convert AGE TO VENUS YEARS
  calculateAgeInVenusYears(){
    let venusAge=this.age/.62;
    console.log("Your age in Venus years is: "+venusAge+" years.");
    return venusAge;
  }

//convert AGE TO MARS YEARS
  calculateAgeInMarsYears(){
    let marsAge=this.age/1.88;
    console.log("Your age in Mars years is: "+marsAge+" years.");
    return marsAge;
  }

//convert AGE TO JUPITER YEARS
  calculateAgeInJupiterYears(){
    let jupiterAge=this.age/11.86;
    console.log("Your age in Jupiter years is: "+jupiterAge+" years.");
    return jupiterAge;
  }

//Take returned age from each planet and subtract from averageLifeExpectancy
  calculateYearsLeft(earthAge, mercuryAge, venusAge, marsAge, jupiterAge){
    const averageLifeExpectancy=70.5;
    //70.5 is the average life expectency of a US Citizen
    let finalResult="";
    let earthExpectancy=(averageLifeExpectancy-earthAge);
    console.log(earthExpectancy);
    if (earthExpectancy>0){
      finalResult+="You have "+earthExpectancy+" years left on Earth. ";
    } else {
      finalResult+="You have lived on Earth "+Math.abs(earthExpectancy)+" years longer than expected. ";
    }

    let mercuryExpectancy=(averageLifeExpectancy-mercuryAge);
    console.log(mercuryExpectancy);
    if (mercuryExpectancy>0){
      finalResult+="You have "+mercuryExpectancy+" years left on Mercury. ";
    } else {
      finalResult+="You have lived on Mercury "+Math.abs(mercuryExpectancy)+" years longer than expected. ";
    }

    let venusExpectancy=(averageLifeExpectancy-venusAge);
    console.log(venusExpectancy);
    if (venusExpectancy>0){
      finalResult+="You have "+venusExpectancy+" years left on Venus. ";
    } else {
      finalResult+="You have lived on Venus "+Math.abs(venusExpectancy)+" years longer than expected. ";
    }

    let marsExpectancy=(averageLifeExpectancy-marsAge);
    console.log(marsExpectancy);
    if (marsExpectancy>0){
      finalResult+="You have "+marsExpectancy+" years left on Mars. ";
    } else {
      finalResult+="You have lived on Mars "+Math.abs(marsExpectancy)+" years longer than expected. ";
    }

    let jupiterExpectancy=(averageLifeExpectancy-jupiterAge);
    console.log(jupiterExpectancy);
    if (jupiterExpectancy>0){
      finalResult+="You have "+jupiterExpectancy+" years left on Jupiter. ";
    } else {
      finalResult+="You have lived on Jupiter "+Math.abs(jupiterExpectancy)+" years longer than expected. ";
    }

    console.log(finalResult);
    return finalResult;

  }

}
