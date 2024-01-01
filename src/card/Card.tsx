import React from 'react';
import solanaLogo from "../assets/solana-logotype.svg";
import {Price} from "./Price.tsx";

export const Card: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="bg-gradient-to-r from-cyan-400 via-blue-900 via-70% to-gray-950 text-white border-transparent border-r-black rounded">
        <div className="flex items-center justify-between p-8">
          <img src={solanaLogo} alt="solana-logo" className="w-40 ml-24"/>
        </div>
        <div className="flex items-center justify-between py-6 px-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Current Price</h3>
            <p className="text-sm text-gray-200">Updated every 15 seconds</p>
          </div>
          <Price />
        </div>
      </div>
    </div>
  );
};
