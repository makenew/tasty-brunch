/* global beforeEach, describe, it */

import chai, { expect } from 'chai'
import spies from 'chai-spies'
import React from 'react'
import skinDeep from 'skin-deep'

import Counter from './Counter'

chai.use(spies)

describe('Counter component', () => {
  let tree

  beforeEach(() => {
    const actions = {
      onIncrement: chai.spy(),
      onDecrement: chai.spy()
    }
    tree = skinDeep.shallowRender(
      <Counter value='42' {...actions} />
    )
  })

  it('has counter class name', () => {
    expect(tree.getRenderOutput().props)
    .to.have.property('className', 'counter')
  })

  it('displays count', () => {
    expect(tree.subTree('p').text()).to.equal('42')
  })

  it('first button calls onIncrement', () => {
    tree.everySubTree('button')[0].props.onClick()
    expect(tree.getMountedInstance().props.onIncrement)
    .to.have.been.called.once()
  })

  it('second button calls onDecrement', () => {
    tree.everySubTree('button')[1].props.onClick()
    expect(tree.getMountedInstance().props.onDecrement)
    .to.have.been.called.once()
  })
})
