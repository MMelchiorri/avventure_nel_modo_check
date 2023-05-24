const Queue = require('./queue')

var queue = new Queue([], 0,0);

describe("Queue test",()=>{
    test('Enqueue Element',()=>{
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.getArray().array).toMatchObject([1,2,3,4])
    })
    test('Dequeue Element',()=>{
        const queue = new Queue([1, 2, 3, 4],0 ,4);
        expect(queue.dequeue()).toBe(1)
    })

    test('Peek Element',()=>{
        const queue = new Queue([2, 3, 4],0 ,3);
        expect(queue.peek()).toBe(2)
    })
    test('isEmpty',()=>{
        const queue = new Queue([],0 ,0);
        expect(queue.empty()).toBe('isEmpty')
    })
})