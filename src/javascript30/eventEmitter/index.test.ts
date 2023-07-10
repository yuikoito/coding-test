import { EventEmitter } from ".";

describe("EventEmitter class", () => {
  test("should return empty array if there is no subscribed event", () => {
    const eventEmitter = new EventEmitter();
    expect(eventEmitter.emit("key")).toEqual([]);
  });
  test("should subscribe successfully and unsubscribe it if the unsubscribe function is called", () => {
    const eventEmitter = new EventEmitter();
    const fn1 = jest.fn(() => 1);
    const fn2 = jest.fn(() => 2);
    const eventName = "firstEvent";
    const sub1 = eventEmitter.subscribe(eventName, fn1);
    expect(eventEmitter.emit(eventName)).toEqual([1]);
    const sub2 = eventEmitter.subscribe(eventName, fn2);
    expect(eventEmitter.emit(eventName)).toEqual([1, 2]);
    expect(sub1.unsubscribe()).toEqual(undefined);
    expect(eventEmitter.emit(eventName)).toEqual([2]);
    expect(sub2.unsubscribe()).toEqual(undefined);
    expect(eventEmitter.emit(eventName)).toEqual([]);
  });
  test("the emit method should be able to accept an OPTIONAL array of arguments", () => {
    const eventEmitter = new EventEmitter();
    const fn1 = jest.fn((n: number) => n + 1);
    const fn2 = jest.fn((n: number) => n + 2);
    const eventName = "firstEvent";
    eventEmitter.subscribe(eventName, fn1);
    expect(eventEmitter.emit(eventName, [1])).toEqual([2]);
    eventEmitter.subscribe(eventName, fn2);
    expect(eventEmitter.emit(eventName, [1])).toEqual([2, 3]);
  });
});
