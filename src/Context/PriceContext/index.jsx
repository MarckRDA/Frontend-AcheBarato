import React, {createContext} from 'react';
import usePriceFilter from '../hooks/usePriceFilter';

const PriceContext = createContext();

const PriceProvider = ({ children }) =>{
    const { priceMax,priceMin, handlerPrice} = usePriceFilter();

    return(
        <PriceContext.Provider value={{ priceMax, priceMin, handlerPrice }}>
            {children}
        </PriceContext.Provider>
    )
}

export { PriceContext, PriceProvider }