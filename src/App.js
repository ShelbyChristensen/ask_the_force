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

  useEffect() => {
      fetchAdvice();
    }, []);


  return (
    <div className="App">
      <h1>Ask the Force</h1>

      {loading ? (
        <p>The Force is listening...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{advice}</p>
      )}

      <button onClick={fetchAdvice}>Ask Again</button>
    </div>
  );
}

export default App;
