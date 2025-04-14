import React, { useMemo, useState } from 'react'

function Fibonnaci() {
    const [num, setNum] = useState(0)

    function fib(num){
        if(num <= 1) return num;
        return fib(num-1) + fib(num-2)
    }
    const fibresult = useMemo(() => fib(num), [num])

  return (
    <div>
      <input type="text" value = {num} onChange={(e)=> setNum(Number(e.target.value))}/>
      <p>{fibresult}</p>
    </div>
  )
}

export default Fibonnaci
