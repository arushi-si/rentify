import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <main className="w-full flex justify-center">
      <div
        id="app-start"
        className="w-[425px] shadow-2xl h-screen bg-white relative overflow-hidden"
      >
        <Home />
      </div>
    </main>
  );
}

export default App;
