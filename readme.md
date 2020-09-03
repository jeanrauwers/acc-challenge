
# Accumulator test

Accumulates one or more variables together and maintains a running integer sum of the
elements. Updates to this total sum are done via the accumulate() function. The current
value of the running total is returned by calling total().

- The initial value of the running sum is 0.
- The total sum can be set to 0 by calling reset().
- The accumulate([x,y,z]) function returns the sum of the collection [x,y,z].

Usage example:
```javascript
const { accumulate, total, reset } = require('./Accumulator');;
let firstSum = accumulate([1, 2, 3]);
let secondSum = accumulate([4]);
let total = total();
``` 
In this case, the value of `firstSum` is 6, `secondSum` is 4 and the value of `total` is 10. Calling `reset()` would reset the total value to 0.
 

## Useful Commands

```
# Install the Jest dependencies
yarn install

# Run the unit tests
yarn test 

# Watch the unit tests
yarn test:watch
```
