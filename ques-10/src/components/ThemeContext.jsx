import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [toggle, setToggle] = useState("light")
    function Toggletheme(){
        if(toggle == "light") setToggle("dark")
        else setToggle("light")
    }
    return(
        <ThemeContext.Provider value = {{toggle, Toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}