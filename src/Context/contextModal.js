import { useState } from "react";
import React from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
const [visibility, setVisibility] = useState(true);

    return (
      <ModalContext.Provider value={{
        visibility,
        changeVisibility: ()=>setVisibility(false)
      }}>
        {children}
      </ModalContext.Provider>
  
    );
  };

  export { ModalContext, ModalProvider };