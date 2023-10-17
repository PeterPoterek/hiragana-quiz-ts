import { useState, useEffect } from "react";
import hiraganas from "./hiraganas";
import "./App.css";

function App() {
  const [currentHiragana, setCurrentHiragana] = useState("");

  const getRandomHiragana = () => {
    const keys = Object.keys(hiraganas);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    setCurrentHiragana(hiraganas[randomKey].character);
  };

  useEffect(() => {
    getRandomHiragana();
  }, []);

  return (
    <>
      <h1>{currentHiragana}</h1>

      <div>
        <button>E</button>
        <button>A</button>
        <button>O </button>
      </div>
    </>
  );
}

export default App;
