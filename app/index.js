/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import counter from './reducers/counter'
import Counter from './components/Counter'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  )
}

export default () => {
  render()
  store.subscribe(render)
}
