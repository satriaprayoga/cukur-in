import React, { createContext, useEffect, useState } from 'react'


export const CapsterContext = createContext();

export const CapsterContextProvider=({children})=>{
    const [capsters,setCapsters]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setIsError]=useState(false);

    const loadCapsters=async () =>{
        setIsLoading(true);
        try {
           
            let res= await fetch("/api/capsters");
            let data=await res.json();
            if(!data) setIsError(true);
            setCapsters(data.capsters);
           // setIsLoading(false);
        } catch (error) {
            setIsError(true);
          
        }
        setIsLoading(false);
    };

    useEffect(()=>{
        loadCapsters();
    },[]);

    return (
        <CapsterContext.Provider
            value={{
                capsters,
                isLoading,
                error
            }}>
            {children}
        </CapsterContext.Provider>
    );
};