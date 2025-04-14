import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Toggle() {
    const {toggle, Toggletheme} = useContext(ThemeContext)
  return (
    <div>
      <button onClick={Toggletheme}>{toggle}</button>
    </div>
  )
}

export default Toggle
