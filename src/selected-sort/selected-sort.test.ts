import { assert, describe, it } from 'vitest'
import { downExample, upExample } from './selected-sort'

describe('order-export에서 사용할 함수 테스트', () => {
  const target = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]
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
      { id: 6 },
      { id: 2 },
      { id: 4 },
      { id: 5 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })

  it('upExample(target, [{id: 2}, {id: 4}])', () => {
    const selectedItems = [{ id: 2 }, { id: 4 }]
    const result = [
      { id: 2 },
      { id: 4 },
      { id: 1 },
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
      { id: 5 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 6 },
    ]

    assert.deepEqual(upExample(target, selectedItems), result)
  })

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
      { id: 5 },
      { id: 3 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 2}, {id: 4}])', () => {
    const selectedItems = [{ id: 2 }, { id: 4 }]
    const result = [
      { id: 1 },
      { id: 3 },
      { id: 5 },
      { id: 2 },
      { id: 4 },
      { id: 6 },
    ]

    assert.deepEqual(downExample(target, selectedItems), result)
  })

  it('downExample(target, [{id: 1}, {id: 5}])', () => {
    const selectedItems = [{ id: 1 }, { id: 5 }]
    const result = [
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 6 },
      { id: 1 },
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
