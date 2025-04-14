import React from 'react'

function Child({setFunc}) {
    console.log("Child is rendered")
  return (
    <div>
      <button onClick = {setFunc}>Parent function is called</button>
    </div>
  )
}

export default React.memo(Child)
