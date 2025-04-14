import React from 'react'
import { useRef } from 'react'

function Form() {
    const filedRef = useRef([])
    function handleClick(){
        const values = filedRef.current.map(item => item.value)
        console.log(values)
    }


  return (
    <div>
      {[0,1,2].map((i)=> (
        <input key={i} ref = {element => filedRef.current[i] = element} />
      ))}

      <button onClick = {handleClick}>Log Values</button>
    </div>
  )
}

export default Form
