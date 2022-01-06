import { createContext, useContext, useState } from "react";

const StartupDataContext = createContext();

//Object initial State Default Store
let initialState = {};

//Set context info
export function StartupDataProvider({ children }) {
  const [startupData, setStartupData] = useState(initialState);

  return (
    <StartupDataContext.Provider value={{startupData, setStartupData}}>
      {children}
    </StartupDataContext.Provider>
  );
}

//Get the context info
export const useStartupDataContext = () => useContext(StartupDataContext);
