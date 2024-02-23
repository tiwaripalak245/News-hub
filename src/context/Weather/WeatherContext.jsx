import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const initialState = {
        weatherData : null
    }

     const [state, WeatherDispatch] = useReducer(WeatherReducer, initialState)


    return ( <WeatherContext.Provider value={{...state, WeatherDispatch}}>
        {children}
    </WeatherContext.Provider>)
}

export default WeatherContext