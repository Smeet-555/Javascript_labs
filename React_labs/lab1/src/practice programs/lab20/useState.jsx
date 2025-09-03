import React from 'react'
import { useState } from 'react'


function UseState() {
    const [count, setCount] = useState(0);

  return (
    <>
       <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div> 
    </>
  )
}

export default UseState