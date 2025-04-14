import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0)

    const handleFunction = useCallback(()=>{
        console.log("The button is clicked")
    },[])

  return (
    <div>
      <button onClick = {() => setCount(count+1)}>Increment</button>
      <p>{count}</p>

      <Child setFunc = {handleFunction} />
    </div>
  )
}

export default Parent
