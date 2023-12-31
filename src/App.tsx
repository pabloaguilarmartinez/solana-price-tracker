import solanaLogo from './assets/solana-logotype.svg';
import {useEffect, useState} from "react";

const API_URL: string = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&precision=2';

type CoinGeckoResponse = {
  solana: {
    usd: number
  }
};

const getPrice = async (): Promise<number> => {
  const response = await fetch(API_URL)
  const json: CoinGeckoResponse = await response.json();
  return json.solana.usd;
};

function App() {
  const [price, setPrice] = useState<number>(0.00);

  const updatePrice = (): void => {
    getPrice().then(currentPrice => {
      setPrice(currentPrice);
    });
  };
  useEffect(() => {
    updatePrice();
    return () => clearInterval(setInterval(updatePrice, 10000));
  }, []);
  return (
    <>
      <header className="bg-gradient-to-r from-teal-500 via-cyan-500 via-47% to-purple-500 to-52% p-4">
        <h1 className="font-mono">SOLANA PRICE TRACKER</h1>
      </header>
      <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div
            className="bg-gradient-to-r from-cyan-400 via-blue-900 via-70% to-gray-950 text-white border-transparent border-r-black rounded">
            <div className="flex items-center justify-between p-8">
              <img src={solanaLogo} alt="solana-logo" className="w-40 ml-24"/>
            </div>
            <div className="flex items-center justify-between py-6 px-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Current Price</h3>
                <p className="text-sm text-gray-200">Updated every 10 seconds</p>
              </div>
              <div>
                <h4 className={`text-3xl font-bold`}>${price}</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
