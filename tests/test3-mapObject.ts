import {test} from 'node:test'
import * as assert from 'node:assert'

test('mapObject', () => {
  // Write a generic function mapObject that takes an object and a mapping function.
  // The function should return a new object where each value is transformed by the mapping function.
  // The function should:
  //  1. Accept an object of any shape.
  //  2. Use TypeScript generics to ensure type safety.
  //  3. Preserve the keys and map the values to a new type based on the mapping function.

  const mapObjectValue = <T extends Record<string, any>, R>(obj: T, fn: (_: T[keyof T]) => R): Record<keyof T, R> => {

  }
  
  assert.deepEqual(mapObjectValue({a: 1, b: 2, c: 3}, (_: any) => _ * 2), {a: 2, b: 4, c: 6})
  assert.deepEqual(mapObjectValue({a: 'a', b: 'b', c: 'c'}, (_: any) => _ + '_'), {a: 'a_', b: 'b_', c: 'c_'})
})

