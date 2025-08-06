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
    const [questionCount, setQuestionCount] = useState(0);
    const [encouragement, setEncouragement] = useState("");

    const encouragements = [
        "You're doing great! Just work through one decision at a time.",
        "It’s okay to not have all the answers right now.",
        "Small steps still move you forward.",
        "You’re capable of more than you think.",
        "All it takes is one step at a time.",
        "Rest is productive too.",
        "You’ve got this. Trust yourself.",
        "Clarity comes from action, not overthinking."
    ];


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

            const newCount = questionCount + 1;
            setQuestionCount(newCount);

            if (newCount % 3 === 0) {
                const randomMessage = encouragements[Math.floor(Math.random() * encouragements.length)];
                setEncouragement(randomMessage);
            }

        } catch (err) {
            setError("Unable to process your request. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
  <div className="App">
    <div className="card">
    <h1>The Gentle Push</h1>
    <p className="subtitle">Remember the Magic 8 Ball? This is what it looks like now designed for decision-fatigued adults. Ask a yes/no question to get a <em> Gentle Push </em> towards your decision.</p>

    <QuestionInput question={question} setQuestion={setQuestion} onSubmit={getDecision} />

    {loading && <LoadingMessage />}
    {error && <ErrorMessage message={error} />}
    {response && <ResponseDisplay answer={response.answer} image={response.image} />}

    {encouragement && (
      <div className="encouragement-box">
        <p>{encouragement}</p>
      </div>
    )}
  </div>
</div>
);

}

export default App;
