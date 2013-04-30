describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#size()', function() {
    it('should check the size of an empty object', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.size()).to.equal(0);
    });

    it('should check the size of an object with values', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      stack.add('a');
      stack.add('b');
      stack.add('c');
      expect(stack.size()).to.equal(3);
    });

  });

  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(stack.add.length).to.equal(1);
    });

    it('should be able to add multiple things', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      stack.add('a');
      stack.add('b');
      stack.add('c');
      expect(stack.size()).to.equal(3);
    });

  it('that calling add increases the length of the stack', function() {
      stack.add('a');
      expect(stack.size()).to.equal(1);
    });
  });

  describe('#remove()', function() {
    it('should be able to remove the last argument passed in', function() {
      stack.add('a');
      stack.add('b');
      stack.add('c');
      expect(stack.remove()).to.equal('c');
    });
  });
  // Hey! Add more tests here to test the functionality of stack
});
