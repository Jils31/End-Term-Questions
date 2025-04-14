import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function Focus() {
    const [input, setInput] = useState("")
    const inputRef = useRef(null)

    function reset(){
        inputRef.current.focus()
        setInput("")
    }


  return (
    <div>
      <input ref = {inputRef} type="text" placeholder='Type Something' value= {input} onChange = {e => setInput(e.target.value)}/>
      <button onClick = {reset}>Reset</button>
      <p>{input}</p>
    </div>
  )
}

export default Focus
