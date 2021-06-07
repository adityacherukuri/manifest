import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  responses: [
    {
      id: 1,
      value: "Hi! I'm Henry, your personal transfer specialist.",
    },
    {
      id: 2,
      value:
        "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!",
    },
    {
      id: 3,
      value:
        "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?",
    },
    {
      id: 4,
      value:
        "Some retirement plans allow you to take out loans. Is this feature important to you?",
    },
    {
      id: 5,
      value: "There are two types of investors",
    },
    {
      id: 6,
      value:
        "Active investors prefer to frequently monitor their investment choices, adjust allocations, and follow the market.",
    },
    {
      id: 7,
      value: "Passive investors like their investments to be managed for them.",
    },
    {
      id: 8,
      value: "Which one best describes you?.",
    },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        responses: state.responses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
