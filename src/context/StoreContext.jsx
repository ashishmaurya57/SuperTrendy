import React from 'react'
import { createContext } from 'react'
import { cloth_list } from '../assets/assets';
export const StoreContext=createContext(null);

const StoreContextProvider = (props) => {
    const contextValue={
        cloth_list
    }
  return (
   <StoreContext.Provider value={contextValue}>
      {props.children}
   </StoreContext.Provider>
  )
}

export default StoreContextProvider;