import { Calculator } from './../src/Calculator.js';

describe('Calculator', function() {


  it('take a person’s age in years and convert it into seconds.', function() {
    let firstTest = new Calculator(28);
    console.log(firstTest.calculateAgeInSeconds());
    expect(firstTest.calculateAgeInSeconds()).toEqual("Your age in seconds is: "+883008000+" seconds.");
    //expect(num.toEqual(0);
  });

  
});
