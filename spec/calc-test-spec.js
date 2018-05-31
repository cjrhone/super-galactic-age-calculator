import { Calculator } from './../src/Calculator.js';

describe('Calculator', function() {


  it('take a person’s age in years and convert it into seconds.', function() {
    let convertTest = new Calculator(28);
    console.log(convertTest.calculateAgeInSeconds());
    expect(convertTest.calculateAgeInSeconds()).toEqual("Your age in seconds is: "+883008000+" seconds.");
    //expect(num.toEqual(0);
  });

  it('will take two dates calculate the difference in seconds between the two.', function() {
    let currentTime=new Date();
    let date1=new Date(1987, 6, 14);
    let date2=new Date(1987, 6, 15);
    let differenceTest = new Calculator(0, date1, date2);


    expect(differenceTest.calculateDiffOfDates()).toEqual("The difference in seconds between the two dates is: "+86400+" seconds.");
    //console.log(differenceTest.calculateAgeInSeconds());

    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Mercury years', function() {
    let earthTest = new Calculator(30);
    expect("Your age in Mercury years is: "+earthTest.calculateAgeInMercuryYears()+" years.").toEqual("Your age in Mercury years is: "+125+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Venus years', function() {
    let venusTest = new Calculator(30);
    expect("Your age in Venus years is: "+venusTest.calculateAgeInVenusYears()+" years.").toEqual("Your age in Venus years is: "+48.38709677419355+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Mars years', function() {
    let marsTest = new Calculator(30);
    expect("Your age in Mars years is: "+marsTest.calculateAgeInMarsYears()+" years.").toEqual("Your age in Mars years is: "+15.957446808510639+" years.");
    //expect(num.toEqual(0);
  });

  it('will take a person’s age in Earth years and convert it to Jupiter years', function() {
    let jupiterTest = new Calculator(30);
    expect("Your age in Jupiter years is: "+jupiterTest.calculateAgeInJupiterYears()+" years.").toEqual("Your age in Jupiter years is: "+2.5295109612141653+" years.");
    //expect(num.toEqual(0);
  });

  it('will determine how many years a person has left to live on each planet', function(){
    let earthAge=30;
    let earthTest=new Calculator(earthAge);
    let mercuryAge=earthTest.calculateAgeInMercuryYears();
    let venusAge=earthTest.calculateAgeInVenusYears();
    let marsAge=earthTest.calculateAgeInMarsYears();
    let jupiterAge=earthTest.calculateAgeInJupiterYears();

    expect(earthTest.calculateYearsLeft(earthAge, mercuryAge, venusAge, marsAge, jupiterAge)).toEqual("You have 40.5 years left on Earth. You have lived on Mercury 54.5 years longer than expected. You have 22.11290322580645 years left on Venus. You have 54.54255319148936 years left on Mars. You have 67.97048903878583 years left on Jupiter. ");
  });
});
