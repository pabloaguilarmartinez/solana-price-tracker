import solanaLogo from './assets/solana-logotype.svg';

function App() {
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
              <img src={solanaLogo} alt="solana-logo" className="w-40 ml-24" />
            </div>
            <div className="flex items-center justify-between py-6 px-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Current Price</h3>
                <p className="text-sm text-gray-200">Updated every 10 seconds</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">$3,456.78</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
