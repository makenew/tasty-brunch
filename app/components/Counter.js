import React from 'react'

export default ({value, onIncrement, onDecrement}) => (
  <div className='counter'>
    <button onClick={onIncrement}>⬆</button>
    <p>{value}</p>
    <button onClick={onDecrement}>⬇</button>
  </div>
)
