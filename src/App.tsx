import React, { useState, useEffect } from "react";
import hiraganas from "./hiraganas";
import "./App.css";

function App() {
  const [currentHiragana, setCurrentHiragana] = useState<{ id: number; character: string } | null>(null);
  const [buttons, setButtons] = useState<string[]>([]);

  const getRandomHiragana = () => {
    const keys = Object.keys(hiraganas);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    setCurrentHiragana(hiraganas[randomKey]);
  };

  const getButtons = () => {
    const keys = Object.keys(hiraganas);
    const randomIndexes = Array.from({ length: 3 }, () => Math.floor(Math.random() * keys.length));
    const randomButtonKeys = randomIndexes.map((index) => keys[index]);
    setButtons(randomButtonKeys);
  };

  useEffect(() => {
    getRandomHiragana();
    getButtons();
  }, []);

  return (
    <>
      <h1>{currentHiragana?.character}</h1>
      <div>
        {buttons.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </>
  );
}

export default App;
