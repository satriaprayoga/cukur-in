import React, { createContext, useState } from 'react'

export const OnboardContext=createContext();

export const OnboardContextProvider = ({children}) => {
  
  const [onboard,setOnboard]=useState(false);

  const toggleOnBoard=()=>{
    setOnboard(!onboard);
  }

  return (
    <OnboardContext.Provider
        value={{
            onboard,
            toggleOnBoard:toggleOnBoard
        }}>
        {children}
    </OnboardContext.Provider>
  )
}
