import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Child from "./Child"

function Parent() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = useCallback(()=>{
        setToggle(prev => !prev)
    }, [])
  return (
    <div>
      <Child onClick = {handleToggle}/>
      <p>{toggle === true ? "True" : "False"}</p>
    </div>
  )
}

export default Parent
