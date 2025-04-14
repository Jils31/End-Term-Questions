import React from 'react'

function Child({onClick}) {

  return (
    <div>
      <button onClick = {onClick}>Call Parent</button>
    </div>
  )
}

export default React.memo(Child)
