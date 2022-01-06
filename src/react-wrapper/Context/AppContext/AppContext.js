
import React, { Component }  from 'react';
import { useReducer, createContext, useContext } from 'react';
import {
  CURRENT_PAGE,
} from './types';

const AppContext = createContext();
const AppDispatchContext = createContext();

//Object Shared State Default Store
let sharedState = {
  page: "Home"
};

//Reducer to change state
const reducer = (state, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return (sharedState = { ...state, page: action.payload });
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

//Set context info
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, sharedState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatchContext.Provider>
  );
}

//Get the context info
export const useAppContext = () => useContext(AppContext);
export const useDispatchAppContext = () => useContext(AppDispatchContext);

//the above ia just a way of simplyfying things so that in the respectve componrnts you can just type useAppContexr()
//instead of setting the usecontext again
