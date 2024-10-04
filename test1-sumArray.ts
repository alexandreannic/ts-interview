import {test} from 'node:test'
import * as assert from 'node:assert'

test('sumArray', () => {
  // Write a generic function mapObject that takes an object and a mapping function.
  // The function should return a new object where each value is transformed by the mapping function.
  // The function should:
  //  1. Accept an object of any shape.
  //  2. Use TypeScript generics to ensure type safety.
  //  3. Preserve the keys and map the values to a new type based on the mapping function.

  const sumArray = (arr: any) => {

  }

  assert.equal(sumArray([1, 2, 3, 4, 5]), 15)
})

