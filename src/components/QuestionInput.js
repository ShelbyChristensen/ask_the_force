function QuestionInput({ question, setQuestion, onSubmit }) {
  return (
    <form
      className="question-input"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="question-input" className="visually-hidden">
        Ask your question
      </label>
      <input
        id="question-input"
        type="text"
        placeholder="What is your question?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">Ask the Force 🔮</button>
    </form>
  );
}

export default QuestionInput;
