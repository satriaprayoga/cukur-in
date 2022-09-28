import React, { createContext, useEffect, useState } from 'react'

export const BarbersContext = createContext();

export const BarberContextProvider=({children})=>{

    const[barbers,setBarbers]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setIsError]=useState(false);

    const loadNearestBarbers=async()=>{
        setIsLoading(true);
        try {
           
            let res= await fetch("/api/barbers");
            let data=await res.json();
            if(!data) setIsError(true);
            setBarbers(data.barbers);
           // setIsLoading(false);
        } catch (error) {
            setIsError(true);
          
        }
        setIsLoading(false);
    };

    useEffect(()=>{
        loadNearestBarbers();
    },[])

    return (
        <BarbersContext.Provider
            value={{
                barbers,
                isLoading,
                error
            }}>
            {children}
        </BarbersContext.Provider>
    );
}