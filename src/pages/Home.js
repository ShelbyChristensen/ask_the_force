import { useState } from "react";
import QuestionInput from "../components/QuestionInput";
import ResponseDisplay from "../components/ResponseDisplay";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getDecision = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      const archive = JSON.parse(localStorage.getItem("archive")) || [];
        archive.push({ question, answer: data.answer });
        localStorage.setItem("archive", JSON.stringify(archive));
      setResponse({ answer: data.answer, image: data.image });
    } catch (err) {
      setError("Unable to process your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>The Gentle Push</h1>
      <p className="subtitle">A simple tool to ease decision fatigue.</p>
      <QuestionInput question={question} setQuestion={setQuestion} onSubmit={getDecision} />
      {loading && <LoadingMessage />}
      {error && <ErrorMessage message={error} />}
      {response && <ResponseDisplay answer={response.answer} image={response.image} />}
    </div>
  );
}

export default App;
