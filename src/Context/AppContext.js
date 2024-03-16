import { createContext, useReducer } from "react";

// It is newState object based on input it receives
const AppReducer = (state, action) => {
  switch (action.type) {
    case "DATA_SIZE":
      return {
        ...state,
        data_size: action.payload,
      };
    case "DAYS_COOL":
      return {
        ...state,
        days_cool: action.payload,
      };
    case "DATA_RETRIEVE":
      return {
        ...state,
        data_retrieve: action.payload,
      };
    case "COOL_PERCENT":
      return {
        ...state,
        cool_percent: action.payload,
      };
    case "REGION":
      return {
        ...state,
        region: action.payload,
      };

    default:
      return state;
  }
};

// It is the initial input values of the calculator
const initialState = {
  region: "US",
  data_size: 100,
  days_cool: 10,
  data_retrieve: 10,
  cool_percent: 10,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        data_size: state.data_size,
        days_cool: state.days_cool,
        data_retrieve: state.data_retrieve,
        cool_percent: state.cool_percent,
        region: state.region,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
