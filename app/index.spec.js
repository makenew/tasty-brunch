import { assert } from 'chai'

import index from '.'

describe('default', () => {
  it('should export a default function', () => {
    assert.isFunction(index)
  })
})
