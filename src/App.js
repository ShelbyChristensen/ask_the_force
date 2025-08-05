import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAdvice = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache",
      });
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (err) {
      setError("Failed to reach out to the Force. Try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="App">
      <h1>Ask the Force</h1>
      <p>Receive advice from beyond.</p>
    </div>
  );
}

export default App;
