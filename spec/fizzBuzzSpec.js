describe('FizzBuzz', function() {

  it('should return Fizz when 3', function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
    });

  it('should return Buzz when 5', function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
    });

  it('should return FizzBuzz when 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
});