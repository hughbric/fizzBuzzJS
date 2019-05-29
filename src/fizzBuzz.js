function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._fizz(number) && this._buzz(number)) {
    return 'FizzBuzz';
  } else if (this._fizz(number)) {
    return 'Fizz';
  } else if (this._buzz(number)) {
    return 'Buzz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._fizz = function(number) {
  return (number % 3 === 0) ? true : false;
}

FizzBuzz.prototype._buzz = function(number) {
  return (number % 5 === 0) ? true : false;
}
