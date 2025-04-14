import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const SideBarContext = createContext()

export function SideBarProvider({children}){
    const [open, setOpen] = useState(false)

    function toogleVisibility(){
        setOpen(open => !open)
    }
    return(
        <SideBarContext.Provider value = {{open, toogleVisibility}}>
            {children}
        </SideBarContext.Provider>
    )
}