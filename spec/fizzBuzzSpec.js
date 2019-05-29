describe('fizzBuzz', function() {
  it('should return FizzBuzz when 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
});

describe('fizz', function() {
  it('should return true when 3', function() {
    expect(fizz(3)).toEqual(true);
    });
});

describe('buzz', function() {
  it('should return true when 5', function() {
    expect(buzz(5)).toEqual(true);
    });
});
