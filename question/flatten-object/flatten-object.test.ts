import { assert, describe, test } from 'vitest'
import { flattenObject } from './flatten-object';
import { pipe, flow } from 'fp-ts/function'
import * as R from 'fp-ts/Record'

describe('객체를 평면화하기', () => {
  test('평범한 object', () => {
    const obj = {
      slug: 'javascript-tutorial',
      content: {
        title: 'Javascript Tutorial',
        body: 'Hello, world.',
      },
      stats: {
        views: 100,
        shares: 200,
        otherStat: {
          test: 1,
        },
      },
      tags: ['javascript', 'typescript', 'nextjs'],
    };

    assert.deepEqual(flattenObject(obj), {
      "slug": "javascript-tutorial",
      "content.title": "Javascript Tutorial",
      "content.body": "Hello, world.",
      "stats.views": 100,
      "stats.shares": 200,
      "stats.otherStat.test": 1,
      "tags.0": "javascript",
      "tags.1": "typescript",
      "tags.2": "nextjs"
    })
  })

  test('object key prefix', () => {
    const obj = {
      slug: 'javascript-tutorial',
      content: {
        title: 'Javascript Tutorial',
        body: 'Hello, world.',
      },
      stats: {
        views: 100,
        shares: 200,
        otherStat: {
          test: 1,
        },
      },
      tags: ['javascript', 'typescript', 'nextjs'],
    };

    assert.deepEqual(pipe(
      obj,
      flattenObject,
      R.reduceWithIndex(
        {}, 
        (key, acc, value) => ({ ...acc, [`__${key}`]: value })
      )
    ), {
      "__slug": "javascript-tutorial",
      "__content.title": "Javascript Tutorial",
      "__content.body": "Hello, world.",
      "__stats.views": 100,
      "__stats.shares": 200,
      "__stats.otherStat.test": 1,
      "__tags.0": "javascript",
      "__tags.1": "typescript",
      "__tags.2": "nextjs"
    })
  })
})

