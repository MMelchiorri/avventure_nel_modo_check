const Stack = require('./stack');

describe("Stack Test", () => {

  var stack = new Stack([], 0);

  test('push method should add elements to the stack', () => {

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.getArray()).toEqual([1, 2, 3, 4]);
  });

  test('pop method should remove and return the top element from the stack', () => {
    const stack = new Stack([1, 2, 3, 4], 4);
    expect(stack.pop()).toBe(4);
  });

  test('top method should return the top element from the stack without removing it', () => {
    const stack = new Stack([1, 2, 3], 3);
    expect(stack.top()).toBe(3);
  });

  test('pop method should return empty becuase there is no element', () => {
    const stack = new Stack([], 0);
    expect(stack.pop()).toBe("isEmpty");
  });

  test('top method should return empty becuase there is no element', () => {
    const stack = new Stack([2, 3, 4, 1], 4);
    expect(stack.order()).toMatchObject([1,2,3,4]);
  });

})


