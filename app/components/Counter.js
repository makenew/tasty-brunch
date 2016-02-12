import React from 'react'

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div className='counter'>
    <button onClick={onIncrement}>⬆</button>
    <p>{value}</p>
    <button onClick={onDecrement}>⬇</button>
  </div>
)

export default Counter
