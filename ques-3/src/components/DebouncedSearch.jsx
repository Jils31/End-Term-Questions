import React from 'react'
import { use } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


function DebouncedSearch() {
    const [searchTerm, setSearchTerm] = useState("")
    const timerID = useRef(null)

    function handleChange(e){
        setSearchTerm(e.target.value)

        if(timerID.current) clearTimeout(timerID.current)
        
        timerID.current = setTimeout(()=>{
            performApicall(e.target.value)
        }, 500)
    }

    function performApicall(name){
        console.log(`Calling ${name}`)
    }
  return (
    <div>
      <input type="text" value = {searchTerm} onChange = {handleChange} />
    </div>
  )
}

export default DebouncedSearch
