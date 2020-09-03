const Store = require('./accumulator');


describe("Store", () => {
    let store
    beforeEach(() => {
        store = Store;
    })

    test('accumulate([4]) equals 4', () => {
        expect(store.accumulate([4])).toBe(4);
    });

    test('Total running sum is 10', () => {
        store.accumulate([5, 5, 5, 5]);
        expect(store.total()).toBe(20);
    });

    test('Total sum can be set to 0 by calling reset()', () => {
        store.accumulate([5, 5]);
        expect(store.total()).not.toBe(0)
        store.reset();
        expect(store.total()).toBe(0);
    });

    test('Initial value of the running sum is 0', () => {
        expect(store.total()).toBe(0);
    });

    test('accumulate([1, 2, 3]) equals 6', () => {
        expect(store.accumulate([1, 2, 3])).toBe(6);
    });
});



