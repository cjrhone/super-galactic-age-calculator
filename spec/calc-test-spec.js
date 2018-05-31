import { Calculator } from './../src/Calculator.js';

describe('Calculator', function() {


  it('take a person’s age in years and convert it into seconds.', function() {
    let firstTest = new Calculator(20);
    console.log(firstTest.calculateAgeInSeconds());
    expect(firstTest.calculateAgeInSeconds()).toEqual("Your age in seconds is: "+630720000+" seconds.");
    //expect(num.toEqual(0);
  });

  it('will take two dates calculate the difference in seconds between the two.', function() {
    let currentTime=new Date();
    let date1=new Date(1987, 6, 14);
    let date2=new Date(1987, 6, 15);
    console.log(currentTime.getUTCFullYear());
    console.log(date1.getUTCFullYear());
    //let time=Date.Now();
    let secondTest = new Calculator(0, date1, date2);


    expect(secondTest.calculateDiffOfDates()).toEqual("The difference in seconds between the two dates is: "+86400+" seconds.");
    //console.log(secondTest.calculateAgeInSeconds());

    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Mercury years', function() {
    let thirdTest = new Calculator(30);
    expect("Your age in Mercury years is: "+thirdTest.calculateAgeInMercuryYears()+" years.").toEqual("Your age in Mercury years is: "+125+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Venus years', function() {
    let fourthTest = new Calculator(30);
    expect("Your age in Venus years is: "+fourthTest.calculateAgeInVenusYears()+" years.").toEqual("Your age in Venus years is: "+48.38709677419355+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Mars years', function() {
    let fifthTest = new Calculator(30);
    expect("Your age in Mars years is: "+fifthTest.calculateAgeInMarsYears()+" years.").toEqual("Your age in Mars years is: "+15.957446808510639+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Jupiter years', function() {
    let sixthTest = new Calculator(30);
    expect("Your age in Jupiter years is: "+sixthTest.calculateAgeInJupiterYears()+" years.").toEqual("Your age in Jupiter years is: "+2.5295109612141653+" years.");
    //expect(num.toEqual(0);
  });

  it('will determine how many years a person has left to live on each planet', function(){
    let earthAge=30;
    let seventhTest=new Calculator(earthAge);
    let mercuryAge=seventhTest.calculateAgeInMercuryYears();
    let venusAge=seventhTest.calculateAgeInVenusYears();
    let marsAge=seventhTest.calculateAgeInMarsYears();
    let jupiterAge=seventhTest.calculateAgeInJupiterYears();

    expect(seventhTest.calculateYearsLeft(earthAge, mercuryAge, venusAge, marsAge, jupiterAge)).toEqual("You have 40.5 years left on Earth. You have lived on Mercury 54.5 years longer than expected. You have 22.11290322580645 years left on Venus. You have 54.54255319148936 years left on Mars. You have 67.97048903878583 years left on Jupiter. ");
  });
});
