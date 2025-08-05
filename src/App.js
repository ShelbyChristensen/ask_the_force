import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  return (
    <div className="App">
      <h1>Ask the Force</h1>
      <p>Receive advice from beyond.</p>
    </div>
  );
}

export default App;
