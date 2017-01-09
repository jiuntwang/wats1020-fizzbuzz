//Assignment Info:
// If the number is divisible by 3, the player says, "Fizz."
// If the number is divisible by 5, the player says, "Buzz."
// If the number is divisible by both 3 and 5, the player says, "FizzBuzz."
// If none of these conditions are true, the player says the number.
// Numbers 1-20


//Count through the numbers 1 to 20 and figure out which numbers are divisible by 3, 5, or both.
for (i = 1; i <= 20; i++) {
  //For every number, check the following:
  //Check if number is divisible by 3
  if (i % 3 === 0) {
    //If true, check to see if its ALSO divisible by 5
    if (i % 5 === 0) {
      console.log('FizzBuzz');
    } else {
      //If number is only divisible by 3, Print 'Fizz'
      console.log('Fizz');
    }
  } else if (i % 5 === 0) {
    //Check if number is divisible by 5
    //If true, Print 'Buzz'
    console.log('Buzz');
  } else {
    //Check if number is NOT divisible for 3 or 5
    //If true, Print number
    console.log(i);
  }
}