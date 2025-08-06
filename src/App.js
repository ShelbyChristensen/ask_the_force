import { useState } from "react";
import './App.css';

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askTheForce = async () => {
    if (!question.trim()) {
      setError("You must ask the Force a question.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      setResponse({
        answer: data.answer,
        image: data.image
      });
    } catch (err) {
      setError("Failed to reach the Force. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Ask the Force</h1>

      <input
        type="text"
        placeholder="What is your question?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askTheForce}>Ask the Force 🔮</button>

      {loading && <p>The Force is listening...</p>}
      {error && <p className="error">{error}</p>}

      {response && (
        <div className="response">
          <p>The Force says: <strong>{response.answer.toUpperCase()}</strong></p>
          <img src={response.image} alt={response.answer} />
        </div>
      )}
    </div>
  );
}

export default App;
