import { useState } from "react";
import './App.css';
import QuestionInput from "./components/QuestionInput";
import ResponseDisplay from "./components/ResponseDisplay";
import ErrorMessage from "./components/ErrorMessage";
import LoadingMessage from "./components/LoadingMessage";

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
      setResponse({ answer: data.answer, image: data.image });
    } catch (err) {
      setError("Failed to reach the Force. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Ask the Force</h1>
      <QuestionInput question={question} setQuestion={setQuestion} onSubmit={askTheForce} />
      {loading && <LoadingMessage />}
      {error && <ErrorMessage message={error} />}
      {response && <ResponseDisplay answer={response.answer} image={response.image} />}
    </div>
  );
}

export default App;
