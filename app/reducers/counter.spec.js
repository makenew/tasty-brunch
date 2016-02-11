import { expect } from 'chai'

import counter from './counter'

describe('reducers', () => {
  describe('counter', () => {
    it('provides an initial state', () => {
      expect(counter(undefined, {})).to.equal(0)
    })

    it('handles the INCREMENT action', () => {
      expect(counter(0, { type: 'INCREMENT' })).to.equal(1)
    })

    it('handles DECREMENT action', () => {
      expect(counter(0, { type: 'DECREMENT' })).to.equal(-1)
    })
  })
})
