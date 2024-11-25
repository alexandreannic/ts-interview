import {test} from 'node:test'
import * as assert from 'node:assert'

test('groupBy', () => {
  // Write a groupBy function that groups an array of objects by a specified key,
  // returning an object where each key is a value from the array,
  // and the corresponding value is an array of matching objects.
  // The function should be generic to work with any array of objects.

  const groupBy = (items: any[], key: any) => {

  }

  const data = [
    {id: 1, category: 'fruit', name: 'apple'},
    {id: 2, category: 'vegetable', name: 'carrot'},
    {id: 3, category: 'fruit', name: 'banana'},
  ]

  assert.deepEqual(groupBy(data, 'category'), {
    fruit: [
      {id: 1, category: 'fruit', name: 'apple'},
      {id: 3, category: 'fruit', name: 'banana'},
    ],
    vegetable: [
      {id: 2, category: 'vegetable', name: 'carrot'},
    ],
  })
})

