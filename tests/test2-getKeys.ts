import {test} from 'node:test'
import * as assert from 'node:assert'

test('getKeys', () => {
  // Write a generic function that extracts the keys of an object and returns them as an array.
  //  1. Use TypeScript generics to ensure type safety.

  const getKeys = (obj: any) => {
  }

  assert.deepEqual(getKeys({a: 1, b: 2, c: 3}), ['a', 'b', 'c'])
})

