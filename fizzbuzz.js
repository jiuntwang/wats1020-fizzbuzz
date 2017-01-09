// If the number is divisible by 3, the player says, "Fizz."
// If the number is divisible by 5, the player says, "Buzz."
// If the number is divisible by both 3 and 5, the player says, "FizzBuzz."
// If none of these conditions are true, the player says the number.
// Numbers 1-20

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log('FizzBuzz');
    } else {
      console.log('Fizz');
    }
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}