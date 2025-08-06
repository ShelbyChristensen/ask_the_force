function QuestionInput({ question, setQuestion, onSubmit }) {
  return (
    <div className="question-input">
      <input
        type="text"
        placeholder="What is your question?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={onSubmit}>Ask the Force 🔮</button>
    </div>
  );
}

export default QuestionInput;
