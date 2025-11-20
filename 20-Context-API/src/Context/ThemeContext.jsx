import React from 'react'
import { createContext } from 'react'



 export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        <ThemeDataContext.Provider value = 'sahil'>
            {props.children}
        </ThemeDataContext.Provider>

    </div>
  )
}

export default ThemeContext