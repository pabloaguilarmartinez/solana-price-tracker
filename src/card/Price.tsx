import React, {useEffect, useReducer} from 'react';
import {getPrice} from './priceProvider.ts';

type PriceState = {
  previousPrice: number;
  currentPrice: number;
}

const initialState: PriceState = {
  previousPrice: 0.00,
  currentPrice: 0.00
};

const reducer = (state: PriceState, newPrice: number): PriceState => {
  return {
    previousPrice: state.currentPrice,
    currentPrice: newPrice
  };
};

export const Price: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updatePrices = (): void => {
    getPrice().then(dispatch);
  };

  useEffect(() => {
    updatePrices();
    const intervalId = setInterval(updatePrices, 15000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h4 className={
        `text-3xl font-bold 
        ${
          state.previousPrice === 0.00 ? ''
            : state.previousPrice < state.currentPrice ? 'animate-color-rise'
              : state.previousPrice > state.currentPrice ? 'animate-color-fall'
                : ''}
        `}>${state.currentPrice}</h4>
    </div>
  );
};
