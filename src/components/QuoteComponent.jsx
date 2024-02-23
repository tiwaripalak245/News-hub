import React, { useContext, useEffect } from 'react'
import QuoteContext from '../context/QuoteContext'
import { fetchQuote } from '../context/QuoteAction';
import NewsContext from '../context/NewsContext';

const QuoteComponent = () => {

    const {quoteData, QuoteDispatch} = useContext(QuoteContext)
    const {allNews} = useContext(NewsContext)

    const getQuote = async() => {
       const data = await fetchQuote()
       
        QuoteDispatch({
            type: "GET_QUOTE",
            payload: data,
        });
    };

    useEffect(() =>{
getQuote()
    },[allNews]);



    if (!quoteData) {
       return (
        <marquee>
       <h1 className="display-4 text-danger text-center">Quote Loading...</h1>
   </marquee>
       )  
    
    }

  return (
    <>
    <marquee>
        <h1 className="display-4 success-text-emphasis text-center">{quoteData.content}</h1>
    </marquee>
    </>
  )
}

export default QuoteComponent
