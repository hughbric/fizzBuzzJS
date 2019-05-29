function fizzBuzz(number) {
  if (fizz(number) && buzz(number)) {
    return 'FizzBuzz';
  } else if (fizz(number)) {
    return 'Fizz';
  } else if (buzz(number)) {
    return 'Buzz';
  }
}

function fizz(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function buzz(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
