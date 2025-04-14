import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function StopWatch() {
    const [time, setTime] = useState(0)
    const timer = useRef(null)

    function starttimer(){
        if(timer.current !== null) return
        timer.current = setInterval(()=>{
            setTime(time => time+1)
        }, 1000)
    }

    function stoptimer(){
        clearInterval(timer.current)
        timer.current = null
    }

    function resetTimer(){
        clearInterval(timer.current)
        timer.current = null
        setTime(0)
    }
  return (
    <div>
      <button onClick={starttimer}>Start</button>
      <button onClick={stoptimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>

      <p>Time : {time}</p>
    </div>
  )
}

export default StopWatch
