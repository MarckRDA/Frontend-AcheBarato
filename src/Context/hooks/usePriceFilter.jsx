import { useState } from 'react';

export default function usePriceFilter(){
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(9999);

    
    function handlerPrice(pricxmin, pricemax){
     
        setPriceMin(pricxmin);
        setPriceMax(pricemax);
    }
    console.log(priceMax);
    console.log(priceMin);
    return { priceMax, priceMin, handlerPrice }
}