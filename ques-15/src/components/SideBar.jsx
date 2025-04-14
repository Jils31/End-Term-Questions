import React from 'react'
import { useContext } from 'react'
import { SideBarContext } from './SideBarContext'

function SideBar() {
    const {open, toogleVisibility} = useContext(SideBarContext)
  return (
    <div>
      <button onClick = {toogleVisibility}>{open === true ? "Close" : "Open"}</button>
    </div>
  )
}

export default SideBar
