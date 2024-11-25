import {test} from 'node:test'
import * as assert from 'node:assert'

test('getDeepPaths', () => {
  // Write a generic utility function deepKeys that takes an object of any shape and returns an array of all its keys, including nested keys.
  // For each nested object, the key should be in the form of "parentKey.childKey".
  // The function should:
  //  1. Recursively traverse the object.
  //  2. Work with deeply nested objects.
  //  3. Use TypeScript generics for type safety.

  const getDeepPaths = (obj: any) => {
  }

  const obj = {
    a: 1,
    b: {b1: 2, b2: {b21: 3}},
    c: 4
  }
  assert.deepEqual(getDeepPaths(obj), ['a', 'b.b1', 'b.b2.b21', 'c'])
})

