import {Header} from "./header/Header.tsx";
import {Card} from "./card/Card.tsx";


function App() {

  return (
    <>
      <Header/>
      <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4">
        <Card/>
      </main>
    </>
  );
}

export default App;
