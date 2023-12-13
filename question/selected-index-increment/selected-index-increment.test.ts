import { assert, describe, it } from 'vitest'
import { downExample, upExample } from './selected-index-increment'

const target = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]

describe('upExample', () => {
  it('upExample(target, [{ id: 2 }, { id: 3 }])', () => {
    const selectedItems = [{ id: 2 }, { id: 3 }]
    const result = [
      { id: 2 },
      { id: 3 },
      { id: 1 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })

  it('upExample(target, [{id: 3}, {id: 6}])', () => {
    const selectedItems = [{ id: 3 }, { id: 6 }]
    const result = [
      { id: 1 },
      { id: 3 },
      { id: 2 },
      { id: 4 },
      { id: 6 },
      { id: 5 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })

  it('upExample(target, [{id: 2}, {id: 4}])', () => {
    const selectedItems = [{ id: 2 }, { id: 4 }]
    const result = [
      { id: 2 },
      { id: 1 },
      { id: 4 },
      { id: 3 },
      { id: 5 },
      { id: 6 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })

  it('upExample(target, [{id: 1}, {id: 5}])', () => {
    const selectedItems = [{ id: 1 }, { id: 5 }]
    const result = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 4 },
      { id: 6 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })
})

describe('downExample', () => {
  it('downExample(target, [{id: 2}, {id: 3}])', () => {
    const selectedItems = [{ id: 2 }, { id: 3 }]
    const result = [
      { id: 1 },
      { id: 4 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 3}, {id: 6}])', () => {
    const selectedItems = [{ id: 3 }, { id: 6 }]
    const result = [
      { id: 1 },
      { id: 2 },
      { id: 4 },
      { id: 3 },
      { id: 5 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 2}, {id: 4}])', () => {
    const selectedItems = [{ id: 2 }, { id: 4 }]
    const result = [
      { id: 1 },
      { id: 3 },
      { id: 2 },
      { id: 5 },
      { id: 4 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 1}, {id: 5}])', () => {
    const selectedItems = [{ id: 1 }, { id: 5 }]
    const result = [
      { id: 2 },
      { id: 1 },
      { id: 3 },
      { id: 4 },
      { id: 6 },
      { id: 5 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 1}, {id: 2}, {id: 3}])', () => {
    const selectedItems = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const result = [
      { id: 4 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })
})
