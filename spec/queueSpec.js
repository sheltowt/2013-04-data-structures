describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should take one argument', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      expect(queue.add.length).to.equal(1);
    });
  });

  it('should be able to add multiple things', function() {
      // Make sure add() takes a single argument using (see http://mdn.io/Function.length)
      queue.add('a');
      queue.add('b');
      queue.add('c');
      expect(queue.size()).to.equal(3);
    });

  describe('size()', function() {
    it('should take one argument', function() {
      queue.add('a');
      queue.add('b');
      queue.add('c');
      queue.add('d');
      expect(queue.size()).to.equal(4);
    });
  });

  describe('remove', function() {
    it('should remove the first thing added', function() {
      queue.add('a');
      queue.add('b');
      queue.add('c');
      queue.add('d');
      expect(queue.remove()).to.equal('a');
    });

    it('check to see if element is elemenated', function() {
      queue.add('a');
      queue.add('b');
      queue.add('c');
      queue.add('d');
      queue.remove();
      expect(queue[0]).to.equal(undefined);
    });
  });

  // Hey! Add more tests here to test the functionality of queue
});
