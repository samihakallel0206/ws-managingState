import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(() => {
    const saveCounter = localStorage.getItem("counter");
    return saveCounter ? parseInt(saveCounter, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);
  return (
    <div className="App">
      <h1>WS Managing State in React</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>Increment</button>
    </div>
  );
}

export default App;
