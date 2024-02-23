import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({children}) =>{

    const initialState = {
        quoteData : {
            content: "jeene ke hai 4 din", author: "salman khan"
        }
    }

    const[state, QuoteDispatch]= useReducer(QuoteReducer, initialState)
    
    return <QuoteContext.Provider value={{...state, QuoteDispatch}}>
        {children}
    </QuoteContext.Provider>
}

export default QuoteContext