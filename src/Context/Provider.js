import React, { useReducer, createContext } from "react";
import { initialState } from "./Store";
import { reducer } from "./Reducer";

export const ContactContext = createContext();

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
