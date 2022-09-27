import React, { createContext } from 'react'

export const BarbersContext = createContext();

export const BarberContextProvider=({children})=>{
    return (
        <BarbersContext.Provider>
            {children}
        </BarbersContext.Provider>
    );
}