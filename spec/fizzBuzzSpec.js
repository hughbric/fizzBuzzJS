describe('FizzBuzz', function() {
  
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiple of 3', function() {
    it('should return true when 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
      });
  });

  describe('multiple of 5', function() {
    it('should return true when 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
      });
  });

  describe('multiple of 3 and 5', function() {
    it('should return FizzBuzz when 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
      });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });

  describe('all other numbers', function() {
    it('11 for 11', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });
});